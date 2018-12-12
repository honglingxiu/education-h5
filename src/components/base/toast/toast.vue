<template>
  <transition name="fade">
    <div class="jb-toast" v-if="visible">
      <span class="jb-toast-text">{{ text }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    text: String
  },
  data() {
    return {
      visible: false
    };
  }
};
</script>

<style scoped>
.jb-toast {
  position: fixed;
  max-width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  z-index: 1000;
  transition: opacity 0.3s linear;
  padding: 10px;
}
.jb-toast-text {
  font-size: 14px;
  line-height: 16px;
  display: block;
  text-align: center;
}
</style>