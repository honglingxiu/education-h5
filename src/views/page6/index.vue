<template>
    <div class="wrapper">
        <div class="bg">
            <img src="./img/1.png" alt="">
            <!--表单-->
            <!-- 注册 -->
            <div class="form-wrapper">
                <div class="m_total_goods">
                    <h2 class="h2_title">双重学习礼包免费领</h2>
                    <p class="info">我要报名</p>
                    <div class="goods_tab">
                        <div class="list">
                            <input class="mobileInput" v-model="formData.phone" type="text" placeholder="输入手机号码" @input="mobileChange" id="mobile" maxlength="11" @blur="setCustomPhone(formData.phone)"/>
                            <button type="button" class="btn-code btn-gray" :disabled="btnStatus" @click="transSMSCode">{{smsText}}
                            </button>
                        </div>
                        <div class="list">
                            <input type="text" v-model="formData.verifyCode" id="smsCode" placeholder="输入验证码"/>
                        </div>
                        <div class="list">
                            <input v-model="formData.name" type="text" placeholder="宝贝名字" @blur="setCustomName(formData.name)"/>
                        </div>
                        <div class="list">
                            <select id="select" v-model="formData.age" @change="setCustomAge(formData.age)">
                                <option value="-1" disabled selected>选择宝贝年龄</option>
                                <option value="5岁以下">5岁以下</option>
                                <option value="5岁">5岁</option>
                                <option value="6岁">6岁</option>
                                <option value="7岁">7岁</option>
                                <option value="8岁">8岁</option>
                                <option value="9岁">9岁</option>
                                <option value="10岁">10岁</option>
                                <option value="11岁">11岁</option>
                                <option value="12岁">12岁</option>
                                <option value="13岁">13岁</option>
                                <option value="14岁">14岁</option>
                                <option value="15岁">15岁</option>
                                <option value="16岁">16岁</option>
                                <option value="17岁">17岁</option>
                                <option value="18岁">18岁</option>
                                <option value="18岁以上">18岁以上</option>
                            </select>
                        </div>

                    </div>
                </div>
                <!-- 按钮 -->
                <div class="goods_btn">
                    <button type="button" class="btn" id="btn1"  @click="submit">立即领课</button>
                    <div class="detail">领课后即可预约，按照预约时间上课即可</div>
                </div>
            </div>
            <!--表单-->
            <img class="common-img" src="./img/2.png" alt="">
            <img class="common-img special-img" src="./img/3.png" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                smsText:"获取验证码",
                btnStatus:true,
                timer:"",
                formData:{
                    verifyCode:"",
                    phone:"",
                    name:"",
                    age:-1
                }
            }
        },
        methods: {
            setCustomPhone(val) {
                if (val.length === 11) {
                    if (/^1[0-9]{10}$/.test(val)) {
                        _paq.push(["trackEvent", "自定义变量", "手机号码", val]);
                    }
                }
            },
            setCustomName(val) {
                if (val) {
                    _paq.push(["trackEvent", "自定义变量", "宝贝名字", val]);
                }
            },
            setCustomAge(val) {
                if (val) {
                    _paq.push(["trackEvent", "自定义变量", "宝贝年龄", val]);
                }
            },
            mobileChange(){
                var t = /^[1][3,4,5,7,8][0-9]{9}$/;
                var n = $("#mobile").val();
                if (t.test(n) && n.length == 11) {
                    if(this.timer!=""){
                        return;
                    }
                    $(".btn-code").removeClass("btn-gray");
                    this.btnStatus=false;//按钮可以点击
                } else {
                    $(".btn-code").addClass("btn-gray");
                    this.btnStatus=true;
                }
            },
            transSMSCode(){//获取验证码
                if (this.btnStatus){
                    return;
                } else {
                    this.$api.getVerifyCode(this.formData.phone).then(res => {
                        this.smsCount(60);
                    })
                }
            },
            smsCount(t){//重置按钮
                var r = () =>{
                    if (t > 0) {
                        this.btnStatus = true;
                        t -= 1;
                        $(".btn-code").addClass("btn-gray");
                        this.smsText = t + "s后获取";
                    } else {
                        clearInterval(this.timer);
                        this.timer="";
                        this.smsText = "获取验证码";
                        if(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.formData.phone)){
                            $(".btn-code").removeClass("btn-gray");
                            this.btnStatus= false;
                        }
                    }
                };
                this.timer = setInterval(function () {
                    r()
                }, 1000)
            },
            checkInfo() {
                if (!this.$api.checkMobile(this.formData.phone)) return "手机号码输入有误";
                if (!/^[0-9]{6}$/.test(this.formData.verifyCode)) return "验证码有误";
                if (!this.$api.checkName(this.formData.name)) return "宝贝名字输入有误";
                if (this.formData.age ==-1) return "请选择宝贝年龄";
                return true;
            },
            submit(){
                var result=this.checkInfo();
                if(result==true){
                    this.$api.submitForm(this.formData).then(res => {
                        this.$loading.close();
                        this.$success.open();
                        _paq.push(["trackEvent", "跳转成功页面", idList.channelName + "：" + idList.channelChildName]);
                    });
                }else {
                    this.$toast(result);
                }
            }
        },
        mounted() {
            document.title="在线少儿英语精品课堂";
            this.$api.addMatomo(50);
        }
    }
</script>


<style scoped lang="less">
    @import './main.less';
</style>