<template>
  <transition name="fade">
    <div class="success" v-show="visible">
      <div class="success-wrapper">
        <img src="./img/success.png" alt="图片加载中" width="100%">
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
      visible: false
    };
  },
  methods: {
    close() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.success-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: #fff;
  width: 85%;
  border-radius: 3px;
  font-size: 16px;
  line-height: 25px;
  -webkit-user-select: none;
  transition: 0.2s;
  z-index: 1010;
  text-align: center;
  max-width: 540px;
  border-radius: 15px;
}
.close{
  position: absolute;
  top: -35px;
  right: 0;
  width: 30px;
  height: 30px;
}
</style>