<template>
  <div class="toast-overlay" @click="clickOverlay">
    <div class="content" :class="type">
      <span class="icon"></span>
      <span class="message">{{message}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      message: {
        type: String,
        require: true
      },
      duration: {
        type: Number
      },
      type: {
        type: String,
        default: 'base'
      },
      closeOnClick: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        timer: null
      }
    },
    methods: {
      clickOverlay() {
        if (this.closeOnClick) {
          this.clear();
        }
      }
    },
    mounted() {
      // 超出18位截取
      this.message = String(this.message).slice(0, 18);
      if (this.duration === undefined) {
        // 如果没有设置消失事件，文字长度大于8时为3秒，否则为1.5秒
        this.duration = this.message.length > 8 ? 3 : 1.5;
      }

      if (this.duration !== 0) {
        this.timer = setTimeout(() => {
          this.clear();
        }, this.duration * 1000)
      }

    },
    beforeDestroy() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "./index.scss";
</style>
