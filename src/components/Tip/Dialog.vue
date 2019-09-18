<template>
  <!-- 完成Dialog 弹框 -->
  <div id="dialog">
    <van-button class="btn" type="primary" @click="TipDialog">提示弹出框</van-button>
    <van-button class="btn" type="primary" @click="Dialog">（确认、取消）的弹出框</van-button>
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
       //  提示弹出框
      TipDialog(){
        this.$dialog.alert({
           // title:'标题呀',
           message:'弹框内容'
        }).then(()=>{
          console.log('点击了确认')
        })
      },

      //（确认、取消）的弹出框
      Dialog(){
        this.$dialog.confirm({
          title:'标题奥',
          message:'哈哈哈哈，嗯嗯，Just do it',
          confirmButtonColor:'red'
        }).then(()=>{
          console.log('点击了确认')
        }).catch(()=>{
          console.log('点击了取消')
        })
      }

    },
    mounted() {

    }
  }
</script>

<style>
  .btn{
    margin:20px;
  }
</style>
