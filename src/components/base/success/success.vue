<template>
    <transition name="fade">
        <!--<div class="success" v-show="visible">
            <div class="success-wrapper">
                <img src="./img/success.png" alt="图片加载中" width="100%">
                <img src="./img/close.png" alt="关闭" class="close" @click="close()">
            </div>
            <div class="jb-mask" @touchmove.stop.prevent></div>
        </div>-->
        <div class="success" v-show="visible">
            <div class="success-wrapper">
                <!--<img src="./img/success.png" alt="图片加载中" width="100%">-->
                <div class="jb-bg">
                    <img src="./img/bg.png" alt="">
                    <h3>领取成功</h3>
                    <div class="inner-bg">
                        <img src="./img/dialog.png" alt="">
                        <span class="phone1">{{phone1}}</span>
                        <span class="phone2" v-if="phoneFlag">{{phone2}}</span>
                    </div>
                </div>
                <div class="jb-text">
                    “感谢您的领取，请这两天留意<span class="text-one">{{phone1}}</span>的固话<template v-if="phoneFlag">或<span class="text-two">{{phone2}}</span>的电话</template>，我们会有专门的老师联系您。帮助您如何安装设备和选择适合的老师给到您宝贝进行体验，宝贝们一定会越来越优秀。”
                    <!--<p v-if="false">“感谢您的领取，请这两天留意<span>{{phone1}}</span>的固话，我们会有专门的老师联系您。帮助您如何安装设备和选择适合的老师给到您宝贝进行体验，宝贝们一定会越来越优秀。”
                    </p>-->
                </div>
                <img src="./img/close.png" alt="关闭" class="close" @click="close()">
            </div>
            <div class="jb-mask" @touchmove.stop.prevent></div>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                visible: false,
                phone1: '010',
                phone2: '021',
                phoneFlag:true//默认情况下是显示两个手机号码
            };
        },
        methods: {
            close() {
                this.visible = false;
            }
        }
    };
</script>

<style scoped lang="less">
    /* .success-wrapper {
         position: fixed;
         top: 50%;
         left: 50%;
         transform: translate3d(-50%, -50%, 0);
         background-color: #fff;
         width: 80%;
         border-radius: 3px;
         font-size: 16px;
         line-height: 25px;
         -webkit-user-select: none;
         transition: 0.2s;
         z-index: 1010;
         text-align: center;
         max-width: 500px;
         border-radius: 15px;
     }

     .close {
         position: absolute;
         top: -35px;
         right: 0;
         width: 30px;
         height: 30px;
     }*/
    .success-wrapper {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        background-color: #fff;
        width: 80%;
        font-size: 16px;
        line-height: 25px;
        -webkit-user-select: none;
        transition: 0.2s;
        z-index: 1010;
        text-align: center;
        max-width: 500px;
        border-radius: 15px;
        .jb-bg {
            position: relative;
            text-align: center;
            img {
                width: 100%;
            }
            h3 {
                width: 100px;
                position: absolute;
                color: #ffffff;
                left: 50%;
                margin-left: -50px;
                top: 40px;
                font-size: 17px;
                line-height: 17px;
            }
            .inner-bg {
                width: 46%;
                position: absolute;
                left: 50%;
                margin-left: -23%;
                top: 68px;
                img {
                    width: 100%;
                }
                span {
                    position: absolute;
                    color: #ffffff;
                    font-weight: 700;
                    &.phone1 {
                        padding-top: 2px;
                        font-size:13px;
                        width: 48px;
                        height: 55px;
                        left: -24px;
                        bottom: 2px;
                        background: url("./img/purpleballon.png") no-repeat left top/contain;
                    }
                    &.phone2 {
                        padding-top: 2px;
                        font-size:10px;
                        width: 40px;
                        height: 48px;
                        right: -28px;
                        top:50%;
                        margin-top:-20px;
                        background: url("./img/greenballon.png") no-repeat left top/contain;
                    }
                }
            }
        }
        .jb-text{
            color: #666;
            padding: 20px 30px;
            text-align: left;
            font-size:13px;
            span{
                font-weight: 700;
                &.text-one{
                    color: #776BF6;
                }
                &.text-two{
                    color: #53EFD8;
                }
            }
        }
        .close {
            position: absolute;
            top: -35px;
            right: 0;
            width: 30px;
            height: 30px;
        }
    }
</style>