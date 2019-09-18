<template>
  <div id="form">
      <van-field v-model="value" placeholder="请输入用户名" class="input" />
      <van-field v-model="value" placeholder="输入手机号码" class="input" />
      <van-field v-model="value" placeholder="输入地址信息" class="input" />
  </div>
</template>

<script>
  export default{
    data(){
      return{
        msg:'',
        value:''
      }
    }
  }
</script>

<style scoped="scoped">
  #form{
    height: 100vh;
    background: pink;
  }
  .input{
    margin:10px 0;
    box-sizing: border-box;
  }
</style>
