<template>
    <div class="app">

        <navbar class="navbar">
            <navbar-item type="back"></navbar-item>
            <navbar-item type="title">
                <text class="title">跨域异步请求</text>
            </navbar-item>
            <navbar-item type="right" @click="viewCode('module/ajax')">
                <icon content="md-code-working" class="iconr"></icon>
            </navbar-item>
        </navbar>

        <div class="content">
            <input class="inPut" v-model="url"/>
            <text class="button" @click="startAjax">开始请求</text>
            <text class="subtitle">状态：{{status}}</text>
            <textarea class="textarea" v-model="content" rows="20"></textarea>
        </div>

    </div>
</template>

<style>
    .app {
        width: 750px;
        flex: 1;
    }

    .navbar {
        width: 750px;
        height: 100px;
    }

    .title {
        font-size: 28px;
        color: #ffffff
    }

    .iconr {
        width: 100px;
        height: 100px;
        color: #ffffff;
    }

    .content {
        flex: 1;
        align-items: center;
    }

    .button {
        width: 380px;
        font-size: 24px;
        text-align: center;
        margin-top: 50px;
        padding-top: 26px;
        padding-bottom: 26px;
        padding-left: 30px;
        padding-right: 30px;
        color: #ffffff;
        background-color: #00B4FF;
    }

    .subtitle {
        padding-top: 26px;
        padding-right: 24px;
        padding-bottom: 24px;
        padding-left: 24px;
        font-size: 28px;
        color: #757575;
    }

    .inPut {
        margin-top: 50px;
        font-size: 26px;
        width: 650px;
        height: 80px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: #65b4d8;
    }

    .textarea {
        font-size: 20px;
        width: 650px;
        height: 480px;
        margin-top: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
        color: #666666;
        border-width: 2px;
        border-style: solid;
        border-color: #65b4d8;
    }
</style>

<script>
    import {openViewCode} from "../../common/js/common";

    const eeui = app.requireModule('eeui');

    export default {
        data() {
            return {
                url: 'http://dotwe.org/raw/dist/7f90ed2135dc774fa2abb06c4fa1901f.bundle.wx',
                status: '',
                content: '',
            }
        },
        methods: {
            viewCode(str) {
                openViewCode(str);
            },
            startAjax() {
                this.status = "";
                this.content = "";
                eeui.ajax({
                    url: this.url,
                    dataType: 'text',
                }, (res) => {
                    if (this.status === "") {
                        this.status+= res.status;
                    }else{
                        this.status+= " > " + res.status;
                    }
                    if (res.status === "success") {
                        this.content = res.result;
                    }
                });
            },
        }
    };
</script>
