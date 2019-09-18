<template>
  <div id="home">
    首页
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: ''
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
</style>
