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
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by
//    weex-core2/weex_core/Source/android/jniprebuild/jni_generator.py
// For
//     com/taobao/weex/layout/ContentBoxMeasurement

#ifndef com_taobao_weex_layout_ContentBoxMeasurement_JNI
#define com_taobao_weex_layout_ContentBoxMeasurement_JNI

#include <jni.h>

//#include "base/android/jni_int_wrapper.h"

// Step 1: forward declarations.
namespace {
const char kContentBoxMeasurementClassPath[] =
    "com/taobao/weex/layout/ContentBoxMeasurement";
// Leaking this jclass as we cannot use LazyInstance from some threads.
jclass g_ContentBoxMeasurement_clazz = NULL;
#define ContentBoxMeasurement_clazz(env) g_ContentBoxMeasurement_clazz

}  // namespace

// Step 2: method stubs.

static intptr_t g_ContentBoxMeasurement_measure = 0;
static void Java_ContentBoxMeasurement_measure(JNIEnv* env, jobject obj, jfloat
    width,
    jfloat height,
    int widthMeasureMode,
    int heightMeasureMode) {
  /* Must call RegisterNativesImpl()  */
  //CHECK_CLAZZ(env, obj,
  //    ContentBoxMeasurement_clazz(env));
  jmethodID method_id =
      base::android::GetMethod(
      env, ContentBoxMeasurement_clazz(env),
      base::android::INSTANCE_METHOD,
      "measure",

"("
"F"
"F"
"I"
"I"
")"
"V",
      &g_ContentBoxMeasurement_measure);

     env->CallVoidMethod(obj,
          method_id, width, height, int(widthMeasureMode),
              int(heightMeasureMode));
  base::android::CheckException(env);

}

static intptr_t g_ContentBoxMeasurement_layoutBefore = 0;
static void Java_ContentBoxMeasurement_layoutBefore(JNIEnv* env, jobject obj) {
  /* Must call RegisterNativesImpl()  */
  //CHECK_CLAZZ(env, obj,
  //    ContentBoxMeasurement_clazz(env));
  jmethodID method_id =
      base::android::GetMethod(
      env, ContentBoxMeasurement_clazz(env),
      base::android::INSTANCE_METHOD,
      "layoutBefore",

"("
")"
"V",
      &g_ContentBoxMeasurement_layoutBefore);

     env->CallVoidMethod(obj,
          method_id);
  base::android::CheckException(env);

}

static intptr_t g_ContentBoxMeasurement_layoutAfter = 0;
static void Java_ContentBoxMeasurement_layoutAfter(JNIEnv* env, jobject obj,
    jfloat computedWidth,
    jfloat computedHeight) {
  /* Must call RegisterNativesImpl()  */
  //CHECK_CLAZZ(env, obj,
  //    ContentBoxMeasurement_clazz(env));
  jmethodID method_id =
      base::android::GetMethod(
      env, ContentBoxMeasurement_clazz(env),
      base::android::INSTANCE_METHOD,
      "layoutAfter",

"("
"F"
"F"
")"
"V",
      &g_ContentBoxMeasurement_layoutAfter);

     env->CallVoidMethod(obj,
          method_id, computedWidth, computedHeight);
  base::android::CheckException(env);

}

static intptr_t g_ContentBoxMeasurement_getWidth = 0;
static jfloat Java_ContentBoxMeasurement_getWidth(JNIEnv* env, jobject obj) {
  /* Must call RegisterNativesImpl()  */
  //CHECK_CLAZZ(env, obj,
  //    ContentBoxMeasurement_clazz(env), 0);
  jmethodID method_id =
      base::android::GetMethod(
      env, ContentBoxMeasurement_clazz(env),
      base::android::INSTANCE_METHOD,
      "getWidth",

"("
")"
"F",
      &g_ContentBoxMeasurement_getWidth);

  jfloat ret =
      env->CallFloatMethod(obj,
          method_id);
  base::android::CheckException(env);
  return ret;
}

static intptr_t g_ContentBoxMeasurement_getHeight = 0;
static jfloat Java_ContentBoxMeasurement_getHeight(JNIEnv* env, jobject obj) {
  /* Must call RegisterNativesImpl()  */
  //CHECK_CLAZZ(env, obj,
  //    ContentBoxMeasurement_clazz(env), 0);
  jmethodID method_id =
      base::android::GetMethod(
      env, ContentBoxMeasurement_clazz(env),
      base::android::INSTANCE_METHOD,
      "getHeight",

"("
")"
"F",
      &g_ContentBoxMeasurement_getHeight);

  jfloat ret =
      env->CallFloatMethod(obj,
          method_id);
  base::android::CheckException(env);
  return ret;
}

// Step 3: RegisterNatives.

static bool RegisterNativesImpl(JNIEnv* env) {

  g_ContentBoxMeasurement_clazz = reinterpret_cast<jclass>(env->NewGlobalRef(
      base::android::GetClass(env, kContentBoxMeasurementClassPath).Get()));

  return true;
}

#endif  // com_taobao_weex_layout_ContentBoxMeasurement_JNI
