<template>
	<div>
		<div class="header">
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" href="javascript:;">
						<img v-lazy="require('./img/new-logo.png')" style="width:100px;">
					</a>
				</div>
			</div>
		</div>
		<div class="top-box" style="margin-top:51px;"></div>
		<section class="content">
			<div class="bg">
				<img v-lazy="require('./img/img_01.jpg')" alt="图片加载中" class="btn1" @click="returnTop">
			</div>
			<div class="out-box" id="in-box">
				<div class="title-top">
					<font color="#000000" class="is-title">免费领取299元试听课</font>
				</div>
				<div id="tmsLandingForm">
					<input type="text" placeholder="请输入学生姓名" class="name input" v-model="form.name" @blur="setCustomName(form.name)">
					<br>
					<input type="tel" maxlength="11" placeholder="请输入手机号（用于联系验证）" class="phone input" v-model="form.phone" @input="setCustomPhone(form.phone)">
					<br>
					<input class="phone input" type="phone" maxlength="6" v-model="form.verifyCode" placeholder="验证码">
					<button class="getVerCode-btn" :disabled="disbtn" @click="getSmsCode">{{codetxt}} {{time}}</button>
					<br>
					<select class="grade input" v-model="form.grade" @change="setCustomGrade(form.grade)">
						<option class="first" value="-1" selected disabled="disabled">年级</option>
						<option value="小学四年级以下">小学四年级以下</option>
						<option value="小学四年级">小学四年级</option>
						<option value="小学五年级">小学五年级</option>
						<option value="小学六年级">小学六年级</option>
						<option value="初一">初一</option>
						<option value="初二">初二</option>
						<option value="初三">初三</option>
						<option value="高一">高一</option>
						<option value="高二">高二</option>
						<option value="高三">高三</option>
						<option value="高三以上">高三以上</option>
					</select>
					<select class="year input" v-model="form.subject" @change="setCustomSubject(form.subject)" :disabled="subjectDis">
						<option class="first" value="-1" selected disabled="disabled">学科</option>
						<option value="语文">语文</option>
						<option value="数学">数学</option>
						<option value="英语">英语</option>
						<option v-if="form.grade !=='小学四年级' && form.grade !=='小学五年级' && form.grade !=='小学六年级'" value="物理">物理</option>
						<option v-if="form.grade !=='小学四年级' && form.grade !=='小学五年级' && form.grade !=='小学六年级'" value="化学">化学</option>
						<option v-if="form.grade !=='小学四年级' && form.grade !=='小学五年级' && form.grade !=='小学六年级'" value="生物">生物</option>
						<option v-if="form.grade !=='小学四年级' && form.grade !=='小学五年级' && form.grade !=='小学六年级'" value="政治">政治</option>
						<option v-if="form.grade !=='小学四年级' && form.grade !=='小学五年级' && form.grade !=='小学六年级'" value="历史">历史</option>
						<option v-if="form.grade !=='小学四年级' && form.grade !=='小学五年级' && form.grade !=='小学六年级'" value="地理">地理</option>
						<option v-if="form.grade !=='小学四年级' && form.grade !=='小学五年级' && form.grade !=='小学六年级'" value="科学">科学</option>
					</select>
					<br>
					<div class="btn-submit" @click="submit">0元试听</div>
					<p class="tmsLandingFormPrivacy">
						<span class="tmsLandingFormiconfont">&#xe657;</span>海风教育保护您的隐私
					</p>
				</div>
			</div>
			<div class="content-dialog popovered pop-error">
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
		<p style="font-size: 0.22rem; text-align: center; color: #999; margin-top:0.2rem">
			©2010-2018hfjy.com All Rights Reserved
		</p>
		<p style="font-size: 0.22rem; text-align: center; color: #999; line-height:0.1rem" class="hh_beian"></p>
	</div>
</template>

<style src="./main.css" scoped></style>
<script>
	export default {
		data: function() {
			return {
				subjectDis: false,
				disbtn: false,
				time: '',
				codetxt: '获取验证码',
				form: {
					verifyCode: "",
					name: '',
					phone: '',
					grade: -1,
					subject: -1,
				},
			}
		},
		watch: {},
		created() {
			document.title = "驱动孩子的学习力|海风教育";
			this.$api.addMatomo(46);
		},
		methods: {
			setCustomName(val) {
				if(val) {
					_paq.push(["trackEvent", "自定义变量", "学生姓名", val]);
				}
			},
			setCustomPhone(val) {
				if(val.length === 11) {
					if(/^1[0-9]{10}$/.test(val)) {
						_paq.push(["trackEvent", "自定义变量", "手机号", val]);
					}
				}
			},
			setCustomGrade(val) {
				if(val) {
					_paq.push(["trackEvent", "自定义变量", "年级", val]);
				}
			},
			setCustomSubject(val) {
				if(val) {
					_paq.push(["trackEvent", "自定义变量", "学科", val]);
				}
			},
			getSmsCode() {
				if(this.disbtn) return;
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
				if(!this.$api.checkName(this.form.name)) return "学生姓名输入有误";
				if(!this.$api.checkMobile(this.form.phone)) return "手机号码输入有误";
				if(!/^[0-9]{6}$/.test(this.form.verifyCode)) return "验证码有误";
				if(this.form.grade === -1) return "请选择年级有误";
				if(this.form.subject === -1) return "请选择学科有误";
				return true;
			},
			submit() {
				let result = this.checkInfo();
				if(result !== true) {
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
				document.querySelector("#tmsLandingForm").scrollIntoView(true);
			}
		}
	}
</script>