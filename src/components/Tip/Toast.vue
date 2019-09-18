<template>
  <!-- Toast提示 -->
  <div id="toast">
    <van-button plain type="primary" @click="toToast">普通文字提示</van-button>
    <van-button plain type="primary" @click="toLoading">加载转圈提示</van-button>
    <van-button plain type="primary" @click="toSuccessTip">成功提示</van-button>
    <van-button plain type="primary" @click="toFailTip">失败提示</van-button>
    <van-button plain type="primary" @click="toCustomIcon">自定义图标提示</van-button>
    <van-button plain type="primary" @click="toCustomImage">自定义图片提示</van-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: ''
      }
    },
    // 引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 $toast 方法，便于在组件内调用。
    methods: {
      // 普通文字提示
      toToast() {
        this.$toast({
          message:'我是需要提示的文字',
          position:'top'
        });
      },

      // 加载转圈提示
      toLoading() {
        this.$toast.loading({
          mask: true,
          message: '加载中...'
        });
      },

      // 成功提示
      toSuccessTip() {
        this.$toast.success({
          message:'成功的提示文案',
        })
      },

      // 失败提示
      toFailTip() {
        this.$toast.fail({
          message:'失败的提示文案'
        })
      },

      //   自定义图标
      toCustomIcon() {
        this.$toast({
          icon: 'star-o', // 找到自己需要的图标
          message: '我是提示文字'
        })
      },

      //自定义图片提示
      toCustomImage() {
        this.$toast({
          icon:'https://www.baidu.com/favicon.ico',
          message:'我是提示文字'
        })
      }

    },
    mounted() {

    }
  }
</script>

<style>
</style>
