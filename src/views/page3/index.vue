<template>
    <div class="wrap" id="klzz_main">
        <!-- 头部 -->
        <header class="wrap-header">
            <!-- 头部广告图 -->
            <div class="header-banner">
                <!--落地页主题图片（从后台调用）-->
                <img v-lazy="require('./img/8103050a7eb086bc3420b81d48a5de46.png')" alt="图片加载中">
            </div>
            <!-- 表单验证页 -->
            <form class="header-form" id="page3Form">
                <input class="sName form-check" type="text" id="name" v-model="form.name" placeholder="学生姓名" @blur="setCustomName(form.name)">
                <select class="age_area form-input" v-model="form.age" @change="setCustomAge(form.age)">
                    <option value="-1" selected>请选择学生年龄</option>
                    <option value="三岁以下">三岁以下</option>
                    <option value="三岁">三岁</option>
                    <option value="四岁">四岁</option>
                    <option value="五岁">五岁</option>
                    <option value="六岁">六岁</option>
                    <option value="七岁">七岁</option>
                    <option value="七岁以上">七岁以上</option>
                </select>
                <input class="smsMobile form-number" type="tel" id="phone" v-model="form.phone" placeholder="手机号"
                       maxlength="11" @input="setCustomPhone(form.phone)">
                <input class="smsCode form-check" type="number" id="code" v-model="form.verifyCode" placeholder="验证">
                <span class="getVerCode-btn" id="sendCode" @click="getSmsCode()"
                      style="color:rgba(57,183,171,1)">获取验证码</span>
                <span class="form-submit-btn" id="loginBtn"
                      style="color:rgba(255,255,255,1);background-color:rgba(57,183,171,1)"
                      @click="submit()">免费申请试听</span>
                <input type="hidden" class="sSource" value="10456">
                <input type="hidden" class="adId" value="10015">
                <input type="hidden" class="inviteUid" value="0">
                <input type="hidden" class="presentId" value="0">
            </form>
        </header>
        <!-- 主体页 -->
        <main class="wrap-main">
            <!--落地页详情内容（从后台调用）-->
            <p>
                <img v-lazy="require('./img/70060a544d71e2965145893437507b67.jpg')" title="微信图片_20181012183612.jpg"
                     alt="图片加载中">
            </p>
            <p>
                <img v-lazy="require('./img/bcff3b410d8bae990c7a1e145ce46e07.jpg')" title="【白】我们怎么学.jpg" alt="图片加载中">
            </p>
            <p>
                <img v-lazy="require('./img/e2f9c8b56137fbfef2773009f06d3cdc.jpg')" title="10月免费demo-试听内页_04.jpg"
                     alt="图片加载中">
            </p>
            <p>
                <img v-lazy="require('./img/d4d133b2176974dba1bbf6aaa7c3e126.jpg')" title="10月免费demo-试听内页_05.jpg"
                     alt="图片加载中">
            </p>
            <p>
                <img v-lazy="require('./img/860680f35121344dae3b82cf54042158.gif')" title="10月免费demo-试听内页_06.gif">
            </p>
            <p>
                <img v-lazy="require('./img/313532295a961b04f0bd4d4bdd90aafb.gif')" title="10月免费demo-试听内页_07.gif">
            </p>
            <p>
                <img v-lazy="require('./img/2d40dd2c37f920c635c59b0e4869fb3a.gif')" title="10月免费demo-试听内页_08.gif">
            </p>
            <p>
                <img v-lazy="require('./img/630bafcf62be024f540db34ebbeb9edb.gif')" title="10月免费demo-试听内页_09.gif">
            </p>
            <p>
                <img v-lazy="require('./img/0734d4eea8e2236504ad872aae2549a1.gif')" title="落地页2-8-1-家长评价_02.gif"
                     alt="图片加载中">
            </p>
            <p>
                <img v-lazy="require('./img/a120ee49d026e419249b0519350a5cbf.jpg')"
                     title="dc44a579d892f192a18cb68c4705dde2.jpg" alt="图片加载中">
            </p>
            <p>
                <img v-lazy="require('./img/7bde08e2411211257c1269c9ea4dca67.jpg')" title="试听内页_11.jpg">
            </p>
        </main>
        <!-- 底部 -->
        <footer class="wrap-footer">
            <!--落地页底部图片（从后台调用）-->
            <img v-lazy="require('./img/4f08c78e88837e85d36595152aad30d2.png')" alt="图片加载中"
                 style="vertical-align: bottom;" @click="returnTop">
        </footer>
    </div>
</template>

<style src="./main.css" scoped></style>

<script>
    export default {
        data: function () {
            return {
                form: {
                    phone: '',
                    name: '',
                    age: "-1",
                    verifyCode: ""
                }
            }
        },
        methods: {
            setCustomName(val) {
                if (val) {
                    _paq.push(["trackEvent", "自定义变量", "学生姓名", val]);
                }
            },
            setCustomAge(val) {
                if (val) {
                    _paq.push(["trackEvent", "自定义变量", "学生年龄", val]);
                }
            },
            setCustomPhone(val) {
                if (val.length === 11) {
                    if (/^1[0-9]{10}$/.test(val)) {
                        _paq.push(["trackEvent", "自定义变量", "手机号", val]);
                    }
                }
            },
            getSmsCode() {
                if (this.disbtn) return;
                this.$api.getVerifyCode(this.form.phone).then(res => {
                    this.sendcCode();
                })
            },
            sendcCode() {
                this.disbtn = true;
                this.codetxt = "重新发送";
                this.time = "60";
                this.$api.countDown(
                    this.time,
                    tick => {
                        this.time = tick;
                    },
                    () => {
                        this.time = "";
                        this.disbtn = false;
                    }
                );
                this.$messagebox.alert("验证码已发送");
            },
            checkInfo() {
                if (!this.$api.checkName(this.form.name)) return "学生姓名输入有误";
                if (this.form.age ==-1) return "请选择学生年龄";
                if (!this.$api.checkMobile(this.form.phone)) return "手机号码输入有误";
                if (!/^[0-9]{6}$/.test(this.form.verifyCode)) return "验证码有误";
                return true;
            },
            submit() {
                let result = this.checkInfo();
                if (result !== true) {
                    this.$toast(result);
                    return;
                }
                this.$loading.open();
                this.$api.submitForm(this.form).then(res => {
                    this.$loading.close();
                    this.$success.open();
                    _paq.push(["trackEvent", "跳转成功页面", idList.channelName + "：" + idList.channelChildName]);
                });
            },
            returnTop() {
                document.querySelector("#page3Form").scrollIntoView(true);
            }
        },
        created() {
            document.title = "VIPThink|3-7岁免费体验课";
            this.$api.addMatomo(44);
        }
    }
</script>
