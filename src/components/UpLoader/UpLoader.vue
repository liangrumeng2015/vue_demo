<template>
  <!-- 实现图片上传 -->
  <div id="uploader">

    <van-uploader v-model="fileList" multiple :after-read="afterRead" />

  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '',
        fileList: [{
            url: 'https://img.yzcdn.cn/vant/cat.jpeg'
          },
          // Uploader 根据文件后缀来判断是否为图片文件
          // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
          // { url: 'https://cloud-image', isImage: true }
        ]
      }
    },
    methods: {
      /*
       *  文件上传完毕会触发该函数afterRead
       */
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
        /*
         *  返回结果：
         * content:''
         * file.lastModified  上次修改日期的时间戳
         * file.lastModifiedDate  上次修改日期
         * file.name 图片的名字
         * file.type  图片类型
         * file.size  图片大小
         */
      }
    }
  }
</script>

<style>
</style>
