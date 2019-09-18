<template>
  <!-- 通知消息提示 -->
  <div id="notify">
      <van-button type="primary" @click="toNotify" class="btn">顶部通知</van-button>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        msg:''
      }
    },
    methods:{
      toNotify(){
        this.$notify({
          message:'我是提示的notify',
          background:'pink',
          duration: 1000
        })
      }
    },
    mounted() {

    }
  }
</script>

<style scoped="scoped">
  .btn{
    margin-top: 100px;
  }
</style>
