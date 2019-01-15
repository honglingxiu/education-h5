<template>
    <div class="wrapper">
        <div class="top">
            <div class="log">
                <span>
                    <img src="./img/log.png" alt="">
                </span>
            </div>
        </div>
        <div class="kong"></div>
        <img class="banner-swipper" src="./img/banner-4.jpg" alt="">
        <div class="form-wrapper baseline">
            <form>
                <ul>
                    <li>
                        <input type="text" maxlength="11" id="mobile" v-model="formData.phone" placeholder="输入正确手机号" @input="mobileChange" @blur="setCustomPhone(formData.phone)">
                    </li>
                    <li class="yzm">
                        <input type="text" v-model="formData.verifyCode" placeholder="请输入验证码" maxlength="6">
                        <button type="button" class="btn-code btn-gray" :disabled="btnStatus" @click="transSMSCode">{{smsText}}</button>
                    </li>
                    <li class="username">
                        <input type="text" v-model="formData.name" placeholder="请输入孩子姓名" maxlength="6" @blur="setCustomName(formData.name)">
                    </li>
                    <li class="date">
                        <input type="text" v-model="formData.age"  @click="popupVisible = !popupVisible" readonly placeholder="请选择孩子年龄">
                        <div class="select-age"></div>
                    </li>
                    <li class="free-btn" @click="submit">免费领取试听课</li>
                </ul>
            </form>
        </div>
        <div class="cen-tips baseline">
            <div class="lc01tit">
                <img src="./img/lc01tit.png" alt="">
            </div>
            <div class="lc01box">
                <ul class="after">
                    <li class="">
                        <div class="lc01left"><img src="./img/lc01box01.png" alt=""></div>
                        <div class="lc01right">
                            <p>
                                <span style="color: rgb(33, 33, 33);">4 岁</span>,「<span style="color: rgb(33, 33, 33);">不敢</span>
                                与人交流胆子小」连尿裤子都不敢找老师换衣服</p>
                        </div>
                    </li>
                    <li class="">
                        <div class="lc01left"><img src="./img/lc01box02.png" alt=""></div>
                        <div class="lc01right"><p><span style="color: rgb(33, 33, 33);">7 岁</span>
                            ,「<span
                                    style="color: rgb(33, 33, 33);">不懂</span>表达自己」不能适应从幼儿园到小学的语言环境</p></div>
                    </li>
                    <li class="">
                        <div class="lc01left"><img src="./img/lc01box03.png" alt=""></div>
                        <div class="lc01right"><p><span style="color: rgb(33, 33, 33);">10 岁</span>,「<span
                                style="color: rgb(33, 33, 33);">不敢</span>当众讲话」班级和社团活动时望「台」生畏
                        </p></div>
                    </li>
                    <li class="">
                        <div class="lc01left"><img src="./img/lc01box04.png" alt=""></div>
                        <div class="lc01right"><p><span style="color: rgb(33, 33, 33);">18 岁</span>
                            ,「<span
                                    style="color: rgb(33, 33, 33);">不擅</span>表现自己」名校自主招生面试失分落榜
                        </p></div>
                    </li>
                    <li class="">
                        <div class="lc01left"><img src="./img/lc01box05.png" alt=""></div>
                        <div class="lc01right"><p><span style="color: rgb(33, 33, 33);">22 岁</span>
                            ,「<span
                                    style="color: rgb(33, 33, 33);">不知道</span>如何展现优势」找工作把月薪 9300
                            谈成了 3900</p></div>
                    </li>
                    <li class="">
                        <div class="lc01left"><img src="./img/lc01box06.png" alt=""></div>
                        <div class="lc01right"><p><span style="color: rgb(33, 33, 33);">27 岁</span>
                            <span style="color: rgb(33, 33, 33);">不会</span>职场语言沟通的技巧」升职加薪与自己无缘</p></div>
                    </li>
                </ul>
            </div>
        </div>
        <img class="common-img" src="./img/lc02bj.png" alt="">
        <div class="lc03tit"><img src="./img/lc03tit.png" alt=""></div>
        <div class="lc03box">
            <div class="swiper-container04">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="lc03left">
                            <img src="./img/lc03box01.png" alt="">
                        </div>
                        <div class="lc03right">
                            <h2>趣味故事引入</h2>
                            <p>通过原创的故事场景引入课程内容，卡通形象「狮子大王」陪伴孩子学习，增加趣味性，提升孩子学习兴趣，让孩子迅速进入学习状态。</p></div>
                    </div>
                    <div class="swiper-slide">
                        <div class="lc03left"><img src="./img/lc03box02.png" alt=""></div>
                        <div class="lc03right"><h2>图像描述</h2>
                            <p>全部采用图像场景讲解课程内容，让孩子的语言更生动、画面感更强，更具有感染力。</p></div>
                    </div>
                    <div class="swiper-slide">
                        <div class="lc03left"><img src="./img/lc03box03.png" alt=""></div>
                        <div class="lc03right"><h2>演讲导图</h2>
                            <p>将不同的演讲主题拆分成多类型的演讲导图，摆脱传统中痛苦的「背稿式演讲」，帮助孩子快速脱稿演讲，培养孩子的想象力、创造力和表达力。</p></div>
                    </div>
                    <div class="swiper-slide">
                        <div class="lc03left"><img src="./img/lc03box04.png" alt=""></div>
                        <div class="lc03right"><h2>情感符号</h2>
                            <p>运用原创的情感符号，在掌握正确、合理的发声方式的同时，帮助孩子轻松准确地表达情感，感受声音的力量。</p></div>
                    </div>
                    <div class="swiper-slide">
                        <div class="lc03left"><img src="./img/lc03box05.png" alt=""></div>
                        <div class="lc03right"><h2>探究式学习</h2>
                            <p>带领孩子探索科技、环保、神奇物种等，让孩子在课程中学会自己搜集素材，提升孩子的探索欲、引导孩子探索未知、开拓孩子的视野。</p></div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        <div class="lc04">
            <div class="baseline">
                <div class="lc04tit"><img src="./img/lc04tit.png" alt=""></div>
                <div class="lc04box">
                    <div class="after">
                        <div class="swiper-slide">
                            <div><img src="./img/lc04box01.png" alt="">
                                <p>与教育部合作权威认证</p></div>
                        </div>
                        <div class="swiper-slide">
                            <div><img src="./img/lc04box02.png" alt="">
                                <p>1 对 1 专属口才老师</p></div>
                        </div>
                        <div class="swiper-slide">
                            <div><img src="./img/lc04box.png" alt="">
                                <p>线上课程在家上课</p></div>
                        </div>
                        <div class="swiper-slide">
                            <div><img src="./img/lc04box04.png" alt="">
                                <p>独创演讲图谱教学法</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lc06">
            <img src="./img/lc06bj.png" alt="">
            <div class="lc06box after">
                <div class="lc06tit">
                    <img src="./img/lc06tit.png" alt=""></div>
                <p class="lc06wz">趣口才教师均具备 3
                    年以上口才教学或教育辅导经验，上岗前均需通过试讲、培训、家长反馈、学员打分等多维度考核。经过严格的甄选，任用懂教育、爱孩子、擅长在线授课的优秀教师。</p></div>
        </div>
        <div class="lc07">
            <div class="baseline">
                <div class="lc07tit"><img src="./img/lc07tit.png" alt=""></div>
                <div class="lc07box"><img src="./img/lc07box.png" alt="">
                    <div>
                        <ul class="after">
                            <li class="line-li">
                                <div class="left"><img src="./img/lc07box01.png" alt=""></div>
                                <div class="right"><h2><!-- react-text: 203 -->预约<!-- /react-text --><br>
                                    <!-- react-text: 205 -->体验课<!-- /react-text --></h2></div>
                            </li>
                            <li class="line-li">
                                <div class="left"><img src="./img/lc07box02.png" alt=""></div>
                                <div class="right"><h2><!-- react-text: 211 -->为您安排<!-- /react-text --><br>
                                    <!-- react-text: 213 -->上课时间<!-- /react-text --></h2></div>
                            </li>
                            <li>
                                <div class="left"><img src="./img/lc07box03.png" alt=""></div>
                                <div class="right"><h2><!-- react-text: 219 -->进入在线教室<!-- /react-text --><br>
                                    <!-- react-text: 221 -->开始上课<!-- /react-text --></h2></div>
                            </li>
                        </ul>
                        <p></p></div>
                </div>
            </div>
        </div>
        <div class="lc09">
            <img src="./img/lc09bj.png" alt="">
            <div class="baseline">
                <div class="lc09box">
                    <h2>无效退款</h2>
                    <span>担心孩子不喜欢？没关系，我们都想到了</span>
                    <p>对首次购买的课程或服务不满意，您可在正式课开课后，或者上课不超过两节的情况下，提出“无条件全额退款”申请，系统处理后可获得全额退款。</p>
                    <a href="#" @click="scrollToTop">马上报名</a></div>
            </div>
        </div>
        <div class="lc10">
            <div class="baseline">
                <div class="swiper-container03">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="./img/icon-ywj.png" alt="">
                            <h3>杨文娟</h3>
                            <p>北京外国语大学招生办主任</p>
                            <span>趣口才重点不在趣，在多元。训练的不仅是口才，还有思维及脑力。课程效果超出你的想象！</span>
                        </div>
                        <div class="swiper-slide">
                            <img src="./img/icon-zyy.png" alt="">
                            <h3>张灜莹</h3>
                            <p>优睡空间创始人</p>
                            <span>趣口才做的是为孩子的心灵开一扇窗，让孩子真诚地表达自己所见所闻，传递爱的力量。</span>
                        </div>
                        <div class="swiper-slide">
                            <img src="./img/icon-kj.png" alt="">
                            <h3>隗洁</h3>
                            <p>中国共济公益基金会执委会委员</p>
                            <span>参加趣口才，上课时“趣”味盎然，下课后“口”吐莲花，一不小心就“才”气外露。</span>
                        </div>
                        <div class="swiper-slide">
                            <img src="./img/icon-zyx.png" alt="">
                            <h3>张歆惞</h3>
                            <p>招蜜创始人</p>
                            <span>这是我女儿上过的比较有意思的一门课程。在这个课程中，她可以大声地抒发自己的情感，学到很多表达自己的技巧。我希望在未来越来越开放的社会中，我的孩子能够通过在趣口才学到的技能，让自己的表达充满魅力！</span>
                        </div>
                        <div class="swiper-slide">
                            <img src="./img/icon-wh.png" alt="">
                            <h3>熊昊</h3>
                            <p>创新工厂董事</p>
                            <span>趣口才，用有趣的方式提高孩子讲述的技巧，思考的逻辑，以及表达的自信。</span>
                        </div>
                        <div class="swiper-slide">
                            <img src="./img/icon-sxs.png" alt="">
                            <h3>沙先生</h3>
                            <p>学员家长</p>
                            <span>在我们父母眼里，孩子的未来比什么都重要，提高口才演讲水平不论对孩子以后的就业，还是人际关系等等都是很大帮助</span>
                        </div>
                        <div class="swiper-slide">
                            <img src="./img/icon-lj.png" alt="">
                            <h3>罗静</h3>
                            <p>美乐树英语CEO</p>
                            <span>趣口才的课程有趣、高效，收获的不仅仅是语言能力的提升，还让孩子更加自信，并逐步框架性思考、表达。</span>
                        </div>
                    </div>
                    <div class="pagination11"></div>
                </div>
            </div>
        </div>
        <div class="lc11">
            <div class="baseline after">
                <div class="fl"><h2>申请体验课 新生限时体验</h2>
                    <p>严选师资、限量试听</p></div>
                <div class="fr">
                    <div><p>体验课</p><a href="#head"><a href="#" @click="scrollToTop">马上抢</a></a></div>
                </div>
            </div>
        </div>
        <mt-popup v-model="popupVisible" position="bottom">
            <mt-picker :slots="ageList" ref="mtPickerAge" showToolbar>
                <div class="picker-toolbar-title">
                    <div class="usi-btn-cancel" @click="popupVisible = !popupVisible">取消</div>
                    <div class="">选择年龄</div>
                    <div class="usi-btn-sure" @click="onComfirmChange">确定</div>
                </div>
            </mt-picker>
        </mt-popup>
    </div>
</template>
<script>
    import {Picker, Popup} from 'mint-ui';
    import Swiper from "swiper"

    export default {
        data() {
            return {
                smsText: "发送验证码",
                btnStatus: true,
                timer:"",
                formData: {
                    verifyCode: "",
                    phone: "",
                    name: "",
                    age: ""
                },
                popupVisible: false,//显示年龄选择框标识
                ageList: [{
                    values: ["4岁以下","4岁", "5岁", "6岁", "7岁", "8岁", "9岁", "10岁", "11岁", "12岁","12岁以上"],
                    flex: 1,
                    defaultIndex: 2,
                    className: "one"
                }]
            }
        },
        methods: {
            _initSwiper() {
                var mySwipper1 = new Swiper(".swiper-container04", {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                });
                var mySwipper2 = new Swiper(".swiper-container03", {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    pagination: {
                        el: '.pagination11',
                        clickable: true,
                    },
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                });
            },
            scrollToTop() {
                $('body,html').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            },
            onComfirmChange() {
                this.popupVisible=false;
                this.formData.age=this.$refs.mtPickerAge.getValues()[0];
                this.setCustomAge(this.formData.age);//上报年龄变量
                this.$refs.mtPickerAge.setValues(["6岁"]);//将下拉年龄列表恢复初始值
            },
            setCustomPhone(val) {
                if (val.length === 11) {
                    if (/^1[0-9]{10}$/.test(val)) {
                        _paq.push(["trackEvent", "自定义变量", "手机号码", val]);
                    }
                }
            },
            setCustomName(val) {
                if (val) {
                    _paq.push(["trackEvent", "自定义变量", "孩子姓名", val]);
                }
            },
            setCustomAge(val) {
                if (val) {
                    _paq.push(["trackEvent", "自定义变量", "孩子年龄", val]);
                }
            },
            mobileChange() {
                var t = /^[1][3,4,5,7,8][0-9]{9}$/;
                var n = $("#mobile").val();
                if (t.test(n) && n.length == 11) {
                    if(this.timer!=""){
                        return;
                    }
                    $(".btn-code").removeClass("btn-gray");
                    this.btnStatus = false;//按钮可以点击
                } else {
                    $(".btn-code").addClass("btn-gray");
                    this.btnStatus = true;
                }
            },
            transSMSCode() {//获取验证码
                if (this.btnStatus) {
                    return;
                } else {
                    this.$api.getVerifyCode(this.formData.phone).then(res => {
                        this.smsCount(60);
                    })
                }
            },
            smsCount(t) {//重置按钮
                var r = () => {
                    if (t > 0) {
                        this.btnStatus = true;
                        t -= 1;
                        $(".btn-code").addClass("btn-gray");
                        this.smsText = t + "s后获取";
                    } else {
                        clearInterval(this.timer);
                        this.timer="";
                        this.smsText = "获取验证码";
                        if (/^[1][3,4,5,7,8][0-9]{9}$/.test(this.formData.phone)) {
                            $(".btn-code").removeClass("btn-gray");
                            this.btnStatus = false;
                        }
                    }
                };
                this.timer = setInterval(function () {
                    r()
                }, 1000)
            },
            checkInfo() {
                if (!this.$api.checkMobile(this.formData.phone)) return "手机号输入有误";
                if (!/^[0-9]{6}$/.test(this.formData.verifyCode)) return "验证码有误";
                if (!this.$api.checkName(this.formData.name)) return "孩子姓名输入有误";
                if (this.formData.age == "") return "请选择孩子年龄";
                return true;
            },
            submit() {
                var result = this.checkInfo();
                if (result == true) {
                    this.$api.submitForm(this.formData).then(res => {
                        this.$loading.close();
                        this.$success.open();
                        _paq.push(["trackEvent", "跳转成功页面", idList.channelName + "：" + idList.channelChildName]);
                    });
                } else {
                    this.$toast(result);
                }
            }
        },
        mounted() {
            document.title = "趣口才";
            this.$api.addMatomo(53);
            //将rem重置为7.5rem为100%的屏幕宽度，1rem为48px，之前是7.2rem，1rem为50px，参考屏幕是360px
            !function (e, t) {
                function n() {
                    var n = s.getBoundingClientRect().width;
                    t = t || 540, n > t && (n = t);
                    var i = 96 * n / e;
                    s.style.fontSize = i + "px"
                }

                var i, o = document, d = window, s = o.documentElement;
                n(), d.addEventListener("resize", function () {
                    clearTimeout(i), i = setTimeout(n, 300)
                }, !1), d.addEventListener("pageshow", function (e) {
                    e.persisted && (clearTimeout(i), i = setTimeout(n, 300))
                }, !1), d.addEventListener("DOMContentLoaded", function () {
                    o.body.style.position = "relative", o.body.style.fontSize = "16px", o.body.style.margin = "0 auto", o.body.style.maxWidth = t + "px"
                }, !1)
            }(720, 640);
            //轮播图初始化
            this._initSwiper();
        },
        components: {
            "mt-picker": Picker,
            "mt-popup": Popup
        }
    }
</script>


<style scoped lang="less">
    @import "./swiper.min.css";
    @import './main.less';

    .swiper-container04 .swiper-pagination /deep/ span {
        background-color: #e7553d;
        opacity: .2;
        cursor: auto;
        &.swiper-pagination-bullet-active {
            opacity: 1;
            &:focus {
                outline: none;
            }
        }
    }

    .swiper-container03 .pagination11 /deep/ span {
        opacity: .2;
        cursor: auto;
        width: 0.180rem;
        height: 0.180rem;
        background-color: #000000;
        &.swiper-pagination-bullet-active {
            background-color: #e7553d;
            opacity: 1;
            &:focus {
                outline: none;
            }
        }
    }

    .mint-popup {
        width: 100%;
        /deep/ .picker-item {
            opacity: .4;
            color: #000000;
            &.picker-selected {
                opacity: 1;
            }
        }
        .picker-toolbar-title{
            display:flex;
            flex-direction:row;
            justify-content: space-between;
            height:42px;
            line-height: 42px;
            font-size: 17px;
        }
        .usi-btn-cancel, .usi-btn-sure {
            color: #108ee9;
            padding: 1px 15px;
        }
    }
</style>
