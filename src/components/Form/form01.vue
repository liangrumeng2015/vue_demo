<template>
  <div id="form01">
    <span>form01页面</span>
    <van-field placeholder="请输入用户名"></van-field>
    <van-button class="btn" @click="toForm02()"> 点击去下一个页面</van-button>
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
      toForm02(){
        console.log('123')
        this.$router.push({name:'Form02'})
      }
    }
  }
</script>

<style scoped="scoped">
  #form01{
    padding: 10px;
    background: #ccc;
    height: 100vh;
  }
  span{
    margin: 30px;
  }
  .btn{
    margin-top: 20px;
  }
</style>
