<template>
  <div>
    <div class="fb-header-info">恭喜您获得388元中小学短板专项提高课！</div>
    <img v-lazy="require('./img/banner.jpg')" alt="图片加载中" width="100%">
    <p class="fbc_staticText">提交后扫码添加“学习小助手”，有更多学习资料领取！</p>
    <div class="header-form">
      <input class="sName" type="text" v-model="formData.name" placeholder="孩子姓名" @blur="setCustomName(formData.name)">
      <input class="smsMobile form-number" type="phone" maxlength="11" v-model="formData.phone" placeholder="家长手机号" @input="setCustomPhone(formData.phone)">
      <div class="smsCode">
        <input type="phone" maxlength="6" v-model="formData.verifyCode" placeholder="验证码">
        <button class="getVerCode-btn" :disabled="disbtn" @click="getSmsCode()">{{codetxt}} {{time}}</button>
      </div>
      <select v-model="formData.grade" placeholder="孩子就读年级" @change="setCustomGrade(formData.grade)">
        <option value disabled selected hidden>孩子就读年级</option>
        <!-- <option value="一年级">一年级</option>
        <option value="二年级">二年级</option>
        <option value="三年级">三年级</option> -->
        <option value="四年级以下">四年级以下</option>
        <option value="四年级">四年级</option>
        <option value="五年级">五年级</option>
        <option value="六年级">六年级</option>
        <option value="初一">初一</option>
        <option value="初二">初二</option>
        <option value="初三">初三</option>
        <option value="初三以上">初三以上</option>
        <!-- <option value="其他年级">其他年级</option> -->
      </select>
      <span class="form-submit-btn" @click="submit()">免费申请试听</span>
    </div>
    <p class="fbc_staticText aria-content">【在家就能上的智能测评课免费领取】</p>
    <img v-lazy="require('./img/img1.jpg')" alt="图片加载中" width="100%">
    <img v-lazy="require('./img/img2.jpg')" alt="图片加载中" width="100%">
    <img v-lazy="require('./img/img3.jpg')" alt="图片加载中" width="100%">
    <img v-lazy="require('./img/img4.jpg')" alt="图片加载中" width="100%">
    <img v-lazy="require('./img/img5.jpg')" alt="图片加载中" width="100%">
    <img v-lazy="require('./img/img6.jpg')" alt="图片加载中" width="100%">
    <img v-lazy="require('./img/img7.jpg')" alt="图片加载中" width="100%">
  </div>
</template>

<style src="./main.css" scoped></style>

<script>
export default {
  data() {
    return {
      disbtn: false,
      codetxt: "获取验证码",
      time: "",
      formData: {
        name: "",
        phone: "",
        grade: '',
        verifyCode: ""
      }
    }
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
    getSmsCode() {
      if (this.disbtn) return;
      this.$api.getVerifyCode(this.formData.phone).then(res => {
        this.sendcCode();
      })
    },
    checkInfo() {
      if (!this.$api.checkName(this.formData.name)) return "孩子姓名输入有误";
      if (!this.$api.checkMobile(this.formData.phone)) return "手机号码输入有误";
      if (!/^[0-9]{6}$/.test(this.formData.verifyCode)) return "验证码有误";
      if (this.formData.grade === "") return "请选择年级";
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
    }
  },
  created() {
    document.title = "恭喜您获得388元中小学短板专项提高课！";
    this.$api.addMatomo(45);
  }
}
</script>


