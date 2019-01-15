<template>
    <div id="app">
        <router-view/>
        <div v-if="onlineState">
            <div class="tipbox">活动已结束</div>
            <div class="jb-mask"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                onlineState: false
            };
        },
        created() {
            this.$api.getIdList();
            this.$api.vkcPost("supermarketloan/eventmarket/onlineState", {...idList}).then(res => {
                res.onlineState === "1" ? (this.onlineState = true) : ""; //0使用中  1已禁用
                idList.channelChildName = res.channelChildName || "";
                idList.channelName = res.channelName || "";
                // _paq.push(["trackEvent", "渠道统计", res.channelName + "：" + idList.channelChildName]);
            });
        }
    };
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
    }

    body {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        border: 0;
        font-weight: normal;
        vertical-align: baseline;
    }

    .tipbox {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 80%;
        transform: translate(-50%, -50%);
        background: #fff;
        line-height: 150px;
        text-align: center;
        border-radius: 6px;
        font-size: 16px;
        letter-spacing: 3px;
        overflow: hidden;
        z-index: 1000;
    }

    /*统一设置输入框的提示跟内容颜色为#666666*/
    ::-webkit-input-placeholder {
        color: #666666 !important;
    }

    :-moz-placeholder {
        color: #666666 !important;
    }

    ::-moz-placeholder {
        color: #666666 !important;
    }

    :-ms-input-placeholder {
        color: #666666 !important;
    }
    input, select {
        color: #666666 !important;
    }
</style>
