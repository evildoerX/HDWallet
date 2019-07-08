/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
#pragma once

#if ENABLE(DFG_JIT)

#include "DFGBasicBlock.h"
#include "DFGCommon.h"
#include "DFGDominators.h"
#include <wtf/FastMalloc.h>
#include <wtf/Noncopyable.h>

namespace JSC { namespace DFG {

class NaturalLoops;

class NaturalLoop {
public:
    NaturalLoop()
        : m_header(0)
        , m_outerLoopIndex(UINT_MAX)
    {
    }
    
    NaturalLoop(BasicBlock* header, unsigned index)
        : m_header(header)
        , m_outerLoopIndex(UINT_MAX)
        , m_index(index)
    {
    }
    
    BasicBlock* header() const { return m_header; }
    
    unsigned size() const { return m_body.size(); }
    BasicBlock* at(unsigned i) const { return m_body[i]; }
    BasicBlock* operator[](unsigned i) const { return at(i); }

    // This is the slower, but simpler, way of asking if a block belongs to
    // a natural loop. It's faster to call NaturalLoops::belongsTo(), which
    // tries to be O(loop depth) rather than O(loop size). Loop depth is
    // almost always smaller than loop size. A *lot* smaller.
    bool contains(BasicBlock* block) const
    {
        for (unsigned i = m_body.size(); i--;) {
            if (m_body[i] == block)
                return true;
        }
        ASSERT(block != header()); // Header should be contained.
        return false;
    }

    // The index of this loop in NaturalLoops.
    unsigned index() const { return m_index; }
    
    bool isOuterMostLoop() const { return m_outerLoopIndex == UINT_MAX; }
    
    void dump(PrintStream&) const;
private:
    friend class NaturalLoops;
    
    void addBlock(BasicBlock* block) { m_body.append(block); }
    
    BasicBlock* m_header;
    Vector<BasicBlock*, 4> m_body;
    unsigned m_outerLoopIndex;
    unsigned m_index;
};

class NaturalLoops {
    WTF_MAKE_NONCOPYABLE(NaturalLoops);
    WTF_MAKE_FAST_ALLOCATED;
public:
    NaturalLoops(Graph&);
    ~NaturalLoops();
    
    unsigned numLoops() const
    {
        return m_loops.size();
    }
    const NaturalLoop& loop(unsigned i) const
    {
        return m_loops[i];
    }
    
    // Return either null if the block isn't a loop header, or the
    // loop it belongs to.
    const NaturalLoop* headerOf(BasicBlock* block) const
    {
        const NaturalLoop* loop = innerMostLoopOf(block);
        if (!loop)
            return 0;
        if (loop->header() == block)
            return loop;
        if (!ASSERT_DISABLED) {
            for (; loop; loop = innerMostOuterLoop(*loop))
                ASSERT(loop->header() != block);
        }
        return 0;
    }
    
    const NaturalLoop* innerMostLoopOf(BasicBlock* block) const
    {
        unsigned index = block->innerMostLoopIndices[0];
        if (index == UINT_MAX)
            return 0;
        return &m_loops[index];
    }
    
    const NaturalLoop* innerMostOuterLoop(const NaturalLoop& loop) const
    {
        if (loop.m_outerLoopIndex == UINT_MAX)
            return 0;
        return &m_loops[loop.m_outerLoopIndex];
    }
    
    bool belongsTo(BasicBlock* block, const NaturalLoop& candidateLoop) const
    {
        // It's faster to do this test using the loop itself, if it's small.
        if (candidateLoop.size() < 4)
            return candidateLoop.contains(block);
        
        for (const NaturalLoop* loop = innerMostLoopOf(block); loop; loop = innerMostOuterLoop(*loop)) {
            if (loop == &candidateLoop)
                return true;
        }
        return false;
    }
    
    unsigned loopDepth(BasicBlock* block) const
    {
        unsigned depth = 0;
        for (const NaturalLoop* loop = innerMostLoopOf(block); loop; loop = innerMostOuterLoop(*loop))
            depth++;
        return depth;
    }
    
    // Return the indices of all loops this belongs to.
    Vector<const NaturalLoop*> loopsOf(BasicBlock*) const;

    void dump(PrintStream&) const;
private:
    // If we ever had a scalability problem in our natural loop finder, we could
    // use some HashMap's here. But it just feels a heck of a lot less convenient.
    Vector<NaturalLoop, 4> m_loops;
};

} } // namespace JSC::DFG

#endif // ENABLE(DFG_JIT)
