<template>
  <div id="pull_up_loading">
    <!-- 上拉加载  （数据的话，得需要后端真实数据，暂时模拟不了）-->

    <scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">
      <div class="card_item" v-for="(item,index) in itemList" :key="index">
        <div class="card_img">
          <img :src="item.img" />
        </div>
        <div class="card_txt">
          <span>{{item.txt}}</span>
          <span>{{item.time}}</span>
        </div>
      </div>
    </scroller>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '',
        itemList: [], // 存放数组的列表
        noDate: false, //这是一个判断是否加载的开关
        showPage: 1, // 分页
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        var url = 'https://www.easy-mock.com/mock/5d68c5821ccb556c5dd501b1/getListMsg/getList'
        this.$axios.post(url).then((res) => {
          console.log(res.data);
          if (res.data.success) {
            this.itemList = res.data.module.itemObj;
          }
        }).catch((error) => {
          console.log(error);
        })
      },
      // 下拉刷新
      refresh() {
        let that = this
        that.showPage = 1 //重置页数刷新每次页数都是第一页
        that.noDate = false //重置数据判断
        setTimeout(function() {
          that.getData();
          that.$refs.myscroller.finishPullToRefresh(); //刷新完毕关闭刷新的转圈
        }, 1700)
      },
      // 上拉加载
      infinite(done) {
        let that = this;
        if (!that.noDate) {
          setTimeout(() => {
            that.showPage++; //下拉一次页数+1
            console.log('页数', that.showPage);
            that.getData();
            done() //进行下一次加载操作
          }, 1500)
        } else {
          that.$refs.myscroller.finishInfinite(true); // 不让它加载了，显示“没有更多数据”，要不然会一直转圈
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .card_item {
    display: flex;
    background: pink;
    margin-top: 10px;
  }

  .card_item .card_img {
    flex: 4;
    font-size: 0;
  }

  .card_item .card_img img {
    width: 100px;
    height: 100px;
  }

  .card_item .card_txt {
    flex: 8;
  }

  .card_item .card_txt span {
    height: 40px;
    line-height: 40px;
    display: block;
  }
</style>
