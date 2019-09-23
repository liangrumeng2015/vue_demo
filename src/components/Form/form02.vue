<template>
  <div id="form2">
    form02页面<br/><br/>
      填写信息看信息是否保存
      <van-field v-model="value01" placeholder="请输入用户名" class="input" />
      <van-field v-model="value02" placeholder="输入手机号码" class="input" />
      <van-field v-model="value03" placeholder="输入地址信息" class="input" />
      <van-button @click="toForm03()">点击进入下个页面</van-button>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        msg:'',
        value01:'',
        value02:'',
        value03:''
      }
    },
    methods:{
      toForm03(){
        this.$router.push({name:'Form03'})
      }
    },
    beforeRouteLeave(to, from, next) {
      console.log('进入了 beforeRouteLeave');
      if (to.name === 'Form03') {
        console.log('进入了 AgreeRules');
        if (!from.meta.keepAlive) {
          from.meta.keepAlive = true; //当我们进入到C时开启B的缓存
        }
        next()
      } else {
        console.log('进入了 ！AgreeRules');
        from.meta.keepAlive = false;
        this.$destroy(); //销毁B的实例
        next(); //当我们前进的不是C时我们让B页面刷新
      }
    }
  }
</script>

<style scoped="scoped">
  #form2{
    height: 100vh;
    background: pink;
  }
  .input{
    margin:10px 0;
    box-sizing: border-box;
  }
</style>
