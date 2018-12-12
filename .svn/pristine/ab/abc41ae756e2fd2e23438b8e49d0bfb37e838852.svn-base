<template>
	<div>
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" href="javascript:;"><img v-lazy="require('./img/new-logo.png')" style="width:100px;"></a>
				</div>
			</div>
		</nav>
		<div class="top-box" style="margin-top:51px;"></div>
		<section class="content">
			<div class="bg">
				<img v-lazy="require('./img/img_01.jpg')" alt="图片加载中" class="btn1" @click="returnTop">
			</div>
			<div class="out-box" id="in-box">
				<div class="title-top">
					<font color="#000000" class="is-title">免费领取299元试听课</font>
				</div>
				<div id='tmsLandingForm'>
					<input type='text' placeholder='请输入学生姓名' class="name input" v-model="form.childrenName"  @blur="setCustomName(form.childrenName)"/>
					<br />
					<input type='tel' maxlength="11" placeholder='请输入手机号（用于联系验证）' class="phone input" v-model="form.phone" @input="setCustomPhone(form.phone)"/>
					<br />
					<input class="phone input" type="phone" maxlength="6" v-model="code" placeholder="验证码">
					<button class="getVerCode-btn" :disabled="disbtn" @click="getSmsCode">{{codetxt}} {{time}}</button>
					<br />
					<select id="grade" class="grade input" v-model="form.grade" @change="setCustomGrade(form.grade)">
						<option value="" disabled selected>年级</option>
						<option v-for="item in grades" :key="item.value" :label="item.value" :value="item.value"></option>
					</select>
					<select class="year input" v-model="form.subject" placeholder='学科'>
						<option value="" disabled selected>学科</option>
						<option v-for="item in subjects" :key="item.value" :label="item.value" :value="item.value"></option>
					</select>
					<br />
					<input type='button' id='tmsLandingFormBtn' value='0元试听' class="btn-submit" @click="submit">
					<p class="tmsLandingFormPrivacy"><span class="tmsLandingFormiconfont">&#xe657;</span>海风教育保护您的隐私</p>
				</div>
			</div>
			<div class="content-dialog  popovered pop-error">
				<div class="Pop-text">
					<div class="text">
						<p class="Pop"></p>
					</div>
				</div>
			</div>

			<div class="bg">
				<img v-lazy="require('./img/img_02.jpg')" alt="图片加载中">
			</div>
			<div class="bg" style="position: relative;">
				<a class="btn1" @click="returnTop">
					<img v-lazy="require('./img/img_03.jpg')" alt="图片加载中">
				</a>
			</div>
			<div class="bg">
				<img v-lazy="require('./img/img_04.jpg')" alt="图片加载中">
			</div>
			<div class="bg" style="position: relative;">
				<a class="btn1" @click="returnTop">
					<img v-lazy="require('./img/img_05.jpg')" alt="图片加载中">
				</a>
			</div>
			<div class="bg">
				<img v-lazy="require('./img/img_06.jpg')" alt="图片加载中">
			</div>
			<div class="bg" style="position: relative;">
				<a class="btn1" @click="returnTop">
					<img v-lazy="require('./img/img_07.jpg')" alt="图片加载中">
				</a>
			</div>
			<div class="bg">
				<img v-lazy="require('./img/img_08.jpg')" alt="图片加载中">
			</div>
			<div class="bg" style="position: relative;">
				<a class="btn1" @click="returnTop">
					<img v-lazy="require('./img/img_09.jpg')" alt="图片加载中">
				</a>
			</div>
			<div class="bg">
				<img v-lazy="require('./img/img_10.jpg')" alt="图片加载中">
			</div>
			<div class="bg" style="position: relative;">
				<a class="btn1" @click="returnTop">
					<img v-lazy="require('./img/img_11.jpg')" alt="图片加载中">
				</a>
			</div>
			<div class="bg">
				<img v-lazy="require('./img/img_12.jpg')" alt="图片加载中">
			</div>
			<div class="bg" style="position: relative;">
				<a class="btn1" @click="returnTop">
					<img v-lazy="require('./img/img_13.jpg')" alt="图片加载中">
				</a>
			</div>
			<div class="bg">
				<img v-lazy="require('./img/img_14.jpg')" alt="图片加载中">
			</div>
			<div class="bg" style="position: relative;">
				<a class="btn1" @click="returnTop">
					<img v-lazy="require('./img/img_15.jpg')" alt="图片加载中">
				</a>
			</div>
		</section>
		<p style="font-size: 0.22rem; text-align: center; color: #999; margin-top:0.2rem">©2010-2018hfjy.com All Rights
			Reserved </p>
		<p style="font-size: 0.22rem; text-align: center; color: #999; line-height:0.1rem" class="hh_beian"></p>
	</div>
</template>

<style src="./main.css" scoped></style>
<style src="./css/bootstrap.css" scoped></style>
<script>
	export default {
		data: function() {
			return {
				code:'',
				disbtn: false,
				time: '',
				codetxt: '获取验证码',
				form: {
					childrenName: '',
					phone: '',
					grade: '',
					subject: '',
				},
				subjects: [{
					value: '语文',
				}, {
					value: '数学',
				}, {
					value: '英语',
				}, {
					value: '物理',
				}, {
					value: '化学',
				}, {
					value: '生物',
				}, {
					value: '政治',
				}, {
					value: '历史',
				}, {
					value: '地理',
				}, {
					value: '科学',
				}, ],
				grades: [{
						value: "小学一年级",
					},
					{
						value: "小学二年级",
					}, {
						value: "小学三年级",
					}, {
						value: "小学四年级",
					}, {
						value: "小学五年级",
					}, {
						value: "小学六年级",
					}, {
						value: "初一",
					}, {
						value: "初二",
					}, {
						value: "初三",
					},
					{
						value: "高一",
					},
					{
						value: "高二",
					},
					{
						value: "高三",
					}
				],

			}
		},
		watch: {},
		created() {
			document.title = "驱动孩子的学习力|海风教育";
			this.$api.addMatomo(46);
		},
		methods: {
			setCustomName(val) {
				if (val) {
					_paq.push(["trackEvent", "自定义变量", "孩子姓名", val]);
				}
			},
			setCustomPhone(val) {
				if (val.length === 11) {
					if (/^1[0-9]{10}$/.test(val)) {
						_paq.push(["trackEvent", "自定义变量", "手机号", val]);
					}
				}
			},
			setCustomGrade(val) {
				if (val) {
					_paq.push(["trackEvent", "自定义变量", "孩子就读年级", val]);
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
				if (!this.$api.checkName(this.form.childrenName)) return "孩子姓名输入有误";
				if (!this.$api.checkMobile(this.form.phone)) return "手机号码输入有误";
				if (!/^[0-9]{6}$/.test(this.code)) return "验证码有误";
				if (this.form.grade === '') return "年级输入有误";
				if (this.form.subject === '') return "学科输入有误";
				return true;
			},
			submit() {
				let result = this.checkInfo();
				if (result !== true) {
					this.$toast(result);
					return;
				}
				this.$loading.open();
				this.$api.submitForm(this.formData).then(res => {
					this.$loading.close();
					this.$success.open();
					_paq.push(["trackEvent", "跳转成功页面", idList.channelName + "：" + idList.channelChildName]);
				});
			},
			returnTop() {
				document.querySelector("#tmsLandingForm").scrollIntoView(true);
			}
		}
	}
</script>
<style>
	.telphone {
		color: #1FABEB;
		font-size: 20px;
		float: right;
		margin-top: 15px;
		margin-right: 6px;
	}

	@media screen and (min-width: 1200px) {
		.telphone {
			display: none;
		}
	}

	body,
	html {
		height: 100%;
		width: 100%;
	}

	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}

	li {
		list-style: none
	}

	.content {
		max-width: 7.5rem;
		margin: 0 auto;
		width: 100%;
	}

	.content .bg {
		width: 100%;
		display: block;
		position: relative;
		max-width: 7.5rem;
		margin: 0 auto;
	}

	.content .bg img {
		width: 100%;
		display: block;
	}

	.content .bg .tab {
		position: absolute;
		top: 1.1rem;
		width: 7.5rem;
		display: flex;
		justify-content: space-around;
	}

	.content .bg .tab li {
		width: 32%;
		border: 3px solid rgb(236, 202, 104);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center
	}

	.content .bg .tab li h1 {
		font-size: 0.3rem;
		font-weight: 100;
	}

	.content .bg .tab li span {
		width: 0.2rem;
		height: 0.05rem;
		background: rgb(236, 202, 104);
	}

	.content .bg .tab li h2 {
		font-size: 0.2rem
	}

	.content .bg .tab li h3 {
		font-size: 0.2rem;
		font-weight: 500;
		padding: 0 0.3rem;
	}

	.content .bg .tab .active {
		background: rgb(236, 202, 104)
	}

	.content .bg .tab li .actives {
		background: #222;
	}

	.content .bg .showgif {
		position: absolute;
		top: 3.6rem;
		left: 1.63rem;
		width: 4.2rem;
		height: 2.62rem;
	}

	.content .bg .showgif img {
		width: 100%
	}

	h2,
	h3 {
		margin: 4px;
		color: #000;
	}

	a:hover {
		text-decoration: none;
		color: #0d0d0d;
	}

	.bg {
		padding: 0;
		margin: 0;
		display: block;
		width: 100%;
	}

	.bg img {
		border: none;
		display: block;
		width: 7.5rem;
	}

	.out-box {
		width: 80%;
		margin: 0 auto;
		padding-top: 50px;
	}

	/* .footer-contact {
		background-image: url(img/foot-img2.jpg)
	} */

	.title-bottom {
		font-size: 20px;
		color: #323232;
		margin: 10px auto;
		text-align: left;
		width: 80%;
	}

	.name {
		width: 100%;
		height: 30px;
		font-size: 16px;
		line-height: 30px;
		margin: 0;
		padding: 0 10px;
		border: 1px solid #838383;
		margin-top: 10px;
	}

	.phone {
		width: 100%;
		height: 30px;
		font-size: 16px;
		line-height: 30px;
		margin: 0;
		padding: 0 10px;
		border: 1px solid #838383;
		margin-top: 12px;
	}

	.kemu {
		width: 100%;
		height: 30px;
		font-size: 16px;
		line-height: 30px;
		margin: 0;
		padding: 0 10px;
		border: 1px solid #838383;
		margin: 12px auto;
	}

	.btn-submit {
		width: 100%;
		height: 40px;
		margin-top: 18px;
		margin-bottom: 30px;
		font-size: 18px;
		font-family: "Microsoft YaHei";
		font-weight: bolder;
		border-radius: 5px;
		background: #fec02b;
		border: none;
		outline: none;
		cursor: pointer;
	}

	.footer-contacts {
		margin-bottom: 0px;
	}

	.sel-left {
		float: left;
		width: 49%;
		height: 30px;
		font-size: 16px;
		line-height: 30px;
		margin: 0;
		padding: 0 6px;
		border: 1px solid #838383;
		margin-top: 12px;
	}

	.sel-right {
		float: right;
		width: 49%;
		height: 30px;
		font-size: 16px;
		line-height: 30px;
		margin: 0;
		padding: 0 6px;
		border: 1px solid #838383;
		margin-top: 12px;
	}

	.container2 {
		height: 0px;
	}

	.pagination {
		position: absolute;
		left: 0;
		text-align: center;
		bottom: .1rem;
		width: 100%;
		z-index: 98;
	}

	.swiper-container-horizontal>.swiper-pagination-bullets,
	.swiper-pagination-custom,
	.swiper-pagination-fraction {
		bottom: 0;
	}

	@font-face {
		font-family: 'iconfont';
		/* project id 557119 */
		src: url('//at.alicdn.com/t/font_557119_jkhxl75b2t.eot');
		src: url('//at.alicdn.com/t/font_557119_jkhxl75b2t.eot?#iefix') format('embedded-opentype'), url('fonts/font_557119_jkhxl75b2t.woff') format('woff'), url('//at.alicdn.com/t/font_557119_jkhxl75b2t.ttf') format('truetype'), url('//at.alicdn.com/t/font_557119_jkhxl75b2t.svg#iconfont') format('svg');
	}

	.out-box {
		padding-top: 30px;
		position: relative;
	}

	.tmsLandingFormiconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}

	.tmsLandingFormPrivacy {
		color: #c1b3b3;
		text-align: center;
		margin-bottom: 20px;
	}

	.title-top {
		font-size: 23px;
		font-family: "Microsoft YaHei";
		line-height: 38px;
		color: #323232;
		margin: 0px auto;
		width: 80%;
		text-align: center;
	}

	.title-bottom {
		font-size: 20px;
		color: #323232;
		margin: 10px auto;
		text-align: left;
		width: 80%;
	}

	#tmsLandingForm .input {
		margin-top: 10px;
		height: 44px;
		padding: 6px 12px;
		font-size: 14px;
		line-height: 1.42857143;
		color: #666;
		background-color: #fff;
		background-image: none;
		border: 1px solid #ccc;
		border-radius: 4px;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
		-webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
		-o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
		transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
		/* outline: none; */
	}

	.name {
		width: 100%;
		margin-top: 10px;
		padding: 0 10px;
	}

	.phone {
		width: 100%;
		margin-top: 12px;
		padding: 0 10px;
	}

	.grade {
		float: left;
		width: 49%;
		margin-top: 12px;
	}

	.year {
		float: right;
		width: 49%;
		margin-top: 12px;
	}

	.btn-submit {
		width: 100%;
		height: 40px;
		margin-top: 18px !important;
		margin-bottom: 10px !important;
		font-size: 15px;
		font-family: "Microsoft YaHei";
		font-weight: bolder;
		border-radius: 5px;
		background: #fec02b;
		border: none;
		outline: none;
		cursor: pointer;
	}

	.footer-contacts {
		margin-bottom: 0px;
	}

	/* 错误提示 */

	.popovered {
		display: none;
	}

	.Pop-text {
		position: fixed;
		top: 45%;
		left: 0;
		z-index: 90;
		width: 100%;
		min-height: 40px;
		line-height: 40px;
		font-size: 15px;
		text-align: center;
		border-radius: 5px;
		color: #FFFFFF;
	}

	.Pop-text .text {
		display: flex;
		display: -webkit-flex;
		justify-content: center;
		-webkit-justify-content: center;
	}

	.Pop-text p {
		font-size: 14px;
		text-align: center;
		padding: 0 10px;
		background: rgba(17, 17, 17, 0.7);
		border-radius: 5px;
		color: #fff;
		line-height: 40px;
	}

	#bannerJump1 .title-top {
		width: 100%;
		font-size: 0.44rem;
	}

	#bannerJump1 .title-top .is-title {
		color: #333;
	}

	#bannerJump1 .title-top>p {
		text-align: center;
		font-size: 0.3rem;
		color: #01a0eb;
		margin: 0;
		margin: 8px auto;
		line-height: 1.5;
	}

	.getVerCode-btn {
		float: right;
		position: absolute;
		bottom: 155px;
		right: 10px;
		color: #2ec1aa !important;
		text-align: right;
		cursor: pointer;
		border: none;
		background-color: #fff;
	}
</style>
