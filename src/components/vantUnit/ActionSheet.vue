<template>
  <!-- ActionSheet 上拉菜单 -->
  <div id="action_sheet">

    <van-button type="primary" @click="alertMenu">弹出菜单</van-button>
    <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" round @cancel="toCancel" @select="onSelect" />

  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '',
        show: false,
        actions: [{
            name: '选项1'
          },
          {
            name: '选项2'
          },
          {
            name: '选项3',
            subname: '描述信息'
          }
        ]
      }
    },
    methods: {
      alertMenu(){
        this.show = true;
      },
      onSelect(item){
          console.log(item);
          this.show = false;
          this.$toast({
            message:item.name,
            duration:500
          })
      },
      toCancel(){
        console.log('点击了取消');
      }
    },
    mounted() {

    }
  }
</script>

<style>
</style>
