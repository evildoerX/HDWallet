<template>

    <div class="app">

        <div v-if="isIPhoneXType" class="immersion" :style="{height:getStatusBarHeightPx()}"></div>

        <scroll-view class="list" ref="myLists" refreshAuto="true" @refreshListener="refresh" @pullLoadListener="pullLoad" :eeui="{pullTipsNo:''}">

            <banner class="swiper" v-if="swiperShow" @itemClick="clickSwiper">
                <div class="swiper-frame" v-for="item in swiperLists">
                    <image class="swiper-image" resize="cover" :src="item.picture"></image>
                </div>
            </banner>

            <div v-if="noticeLists.length > 0" class="notice">
                <image class="notice-image" src="./images/index-notice.png"></image>
                <icon class="notice-icon"></icon>
                <scroll-notice class="notice-lists" :lists="noticeLists" height="80" font-size="28" interval="5000" @itemClick="noticeClick"></scroll-notice>
            </div>

            <div v-if="categoryShow" class="title">
                <text class="title-text">热卖商品</text>
                <div class="title-tabs">
                    <text v-for="(item, index) in categoryLists" :class="[item.id === categoryid ? 'title-tabs-text-active' : 'title-tabs-text']" :key="index" @click="categoryid=item.id">{{item.title}}</text>
                </div>
            </div>

            <tabbar v-if="tabPages.length > 0" ref="listTabbar" class="list-tabbar" @pageSelected="pageSelected" :tabPages="tabPages" :style="tabbarStyle"></tabbar>

        </scroll-view>

    </div>

</template>

<style scoped>
    .app {
        flex: 1;
    }
    .list {
        flex: 1;
        width: 750px;
        background-color: #ffffff;
    }
    .immersion {
        width: 750px;
    }
    .swiper {
        width: 750px;
        height: 420px;
        selectedIndicatorColor: #ffffff;
    }
    .swiper-frame {
        width: 750px;
        height: 420px;
    }
    .swiper-image {
        width: 750px;
        height: 420px;
    }
    .notice {
        height: 88px;
        flex-direction: row;
        align-items: center;
        background-color: #ffffff;
    }
    .notice-image {
        margin-left: 22px;
        width: 128px;
        height: 30px;
    }
    .notice-icon {
        font-size: 32px;
        width: 62px;
        height: 62px;
        color: #642C2E;
        content: 'tb-notification';
    }
    .notice-lists {
        flex: 1;
    }
    .title {
        position: relative;
        background-color: #f4f8f9;
    }
    .title-text {
        height: 86px;
        line-height: 86px;
        font-weight: 300;
        padding: 0 28px;
        font-size: 32px;
    }
    .title-tabs {
        flex-direction: row;
        position: absolute;
        bottom: 0;
        right: 28px;
    }
    .title-tabs-text,
    .title-tabs-text-active {
        padding: 0 24px;
        margin: 0 2px;
        height: 68px;
        line-height: 68px;
        font-size: 26px;
        text-align: center;
    }
    .title-tabs-text-active {
        color: #E31D1A;
        background-color: #ffffff;
    }
    .list-tabbar {
        width: 750px;
        tabHeight: 0;
    }
</style>

<script>
    // import {apiAjax, getToken, onCustomListener, platform, serverUrl, setCustomListener} from "../app";
    import {count, runNum, isObject, each, jsonParse, getObject} from "../../common/js/global";
    // import ScrollNotice from "../components/scrollNotice.vue";

    const eeui = weex.requireModule('eeui');

    export default {
        // components: {ScrollNotice},
        mixins: [{
            methods: {
                getStatusBarHeightPx() {
                    return eeui.getStatusBarHeightPx();
                },
            }
        }],

        filters: {
            twoNum(s) {
                return runNum(s, 2);
            }
        },

        data() {
            return {
                loadIng: 0,

                isIPhoneXType: eeui.isIPhoneXType(),

                swiperShow: true,
                swiperLists: [],

                categoryid: 0,
                categoryShow: true,
                categoryLists: [],

                tabPages: [],
                tabHeight: {},

                noticeLists: [],
            }
        },

        mounted() {
            setCustomListener('indexHomeTabHeight', 'index-home', (params) => {
                let data = jsonParse(params);
                this.$set(this.tabHeight, data.categoryid, data.height);
            });
            setCustomListener('indexHomeTabHasMore', 'index-home', (params) => {
                let data = jsonParse(params);
                each(this.tabPages, (index, item) => {
                    if (item.params.id === data.id) {
                        this.$set(this.tabPages[index], 'hasMore', data.hasMore);
                        return false;
                    }
                });
                this.resetHasMore();
            });
            onCustomListener('index', 'index-home-mounted');
        },

        watch: {
            loadIng(val) {
                if (val === 0) {
                    this.$refs.myLists.refreshed();
                }
            },

            categoryid(val) {
                setTimeout(() => {
                    this.$refs.listTabbar.setCurrentItem("listTabbar_" + val);
                    this.resetHasMore();
                }, 50);
            },
        },

        computed: {
            tabbarStyle() {
                const customStyle = {};
                if (count(this.tabHeight[this.categoryid]) > 0) {
                    customStyle.height = this.tabHeight[this.categoryid];
                }
                return customStyle;
            }
        },

        methods: {

            refresh() {
                if (this.loadIng > 0) {
                    return;
                }
                this.getSwiper();
                this.getCategory();
                this.getNotice();
                this.$refs.myLists.setHasMore(false);
            },

            pullLoad() {
                onCustomListener('indexHomeTabPullLoad', this.categoryid);
            },

            

            clickSwiper(data) {
                let item = this.swiperLists[data.position];
                if (!isObject(item)) {
                    return;
                }
                if (!isObject(item.paramet)) {
                    return;
                }
                //
                switch (item.action) {
                    case "toast":
                        if (count(item.paramet.toast) > 0) {
                            eeui.toast(item.paramet.toast);
                        }
                        break;

                    case "product":
                        if (runNum(item.paramet.productid) > 0) {
                            eeui.openPage({
                                url: 'product.js',
                                pageType: 'weex',
                                statusBarType: "immersion",
                                params: {id: item.paramet.productid}
                            });
                        }
                        break;

                    case "web":
                        if (count(item.paramet.url) > 5) {
                            eeui.openPage({
                                url: 'assets.js',
                                pageType: 'weex',
                                statusBarColor: "#E31D1A",
                                backgroundColor: "#FFFFFF",
                                params: {
                                    title: item.paramet.title,
                                    url: item.paramet.url,
                                }
                            });
                        }
                        break;
                }
            },

            

            noticeClick(index, item) {
                let url = serverUrl(`mobile#/notice?id=${item.id}&platform=${platform()}&token=${getToken()}`);
                eeui.openPage({
                    url: 'assets.js',
                    pageType: 'weex',
                    statusBarColor: "#E31D1A",
                    backgroundColor: "#FFFFFF",
                    params: {
                        title: '轩妈快报',
                        url: url,
                    }
                });
            },

            initTabPages() {
                let tabs = [];
                this.tabPages = [];
                each(this.categoryLists, (index, item) => {
                    tabs.push({
                        tabName: "listTabbar_" + item.id,
                        title: item.title,
                        url: 'index-home-page.js',
                        params: item,
                        hasMore: false,
                    });
                });
                this.$nextTick(() => { this.tabPages = tabs; });
            },

            resetHasMore() {
                each(this.tabPages, (index, item) => {
                    if (item.params.id === this.categoryid) {
                        this.$refs.myLists.setHasMore(item.hasMore);
                        return false;
                    }
                });
            },

            pageSelected(params) {
                this.categoryid = getObject(this.categoryLists[params.position], 'id');
            },
        }
    };
</script>
