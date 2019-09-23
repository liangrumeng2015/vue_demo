<template>
  <div id="home">
    首页
    <img src="../../static/images/orderSeeProgress0.png">
    <img src="/static/images/orderSeeProgress1.png">
    <img :src="'../../static/images/orderSeeProgress'+index+'.png'">
    <img  :src="orderPro1Img" />
    <img  :src="orderPro2Img" />
  </div>
</template>

<script>
  import orderPro1 from '@@/images/orderSeeProgress0.png'
  import orderPro2 from '@@/images/orderSeeProgress1.png'
  export default {
    data() {
      return {
        msg: '',
        index:0,
        orderPro1Img:orderPro1,
        orderPro2Img:orderPro2
      }
    },
    methods: {
      getMusicListData() {    // 未封装的axios请求
        let that = this;
        let url = that.httpUrl.url + '/justdoit/getMusicList';
        that.$axios.get(url).then(res => {
          console.log('getMusicListData1请求拿到的数据===',res);
        }).catch(error => {
          console.log(error);
        })
      },
      getMusicListData2() {   // 使用封装后的axios请求
        let that = this;
        let url = '/justdoit/getMusicList'
        that.httpRequest(url, '', 'get').then(res => {
          console.log('getMusicListData2请求拿到的数据===',res);
        })
      }
    },
    mounted() {
      this.getMusicListData();
      this.getMusicListData2();
    }

  }
</script>

<style scoped="scoped">
  img{
    width: 100%;
  }
</style>
