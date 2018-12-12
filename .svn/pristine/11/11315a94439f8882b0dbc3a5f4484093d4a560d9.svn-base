<template>
  <transition name="fade">
    <div class="jb-msgbox" v-show="visible">
      <div class="jb-msgbox-wrapper">
        <div class="jb-msgbox-content" v-if="message !== ''">
          <div class="jb-msgbox-message">{{message}}</div>
        </div>
        <div class="jb-msgbox-btn" @click="handleAction()">确定</div>
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
  props: {
    message: String
  },
  methods: {
    handleAction() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.jb-msgbox-wrapper {
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
  overflow: hidden;
  transition: 0.2s;
  z-index: 1000;
  text-align: center;
  max-width: 540px;
}
.jb-msgbox-content {
  padding: 35px 20px;
  border-bottom: 1px solid #ddd;
}
.jb-msgbox-btn {
  line-height: 40px;
  color: #26a2ff;
  letter-spacing: 5px;
}
</style>