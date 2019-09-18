// 存放公共js的文件
export default{
  install(_this,options){
    /*
    * 统一管理域名
    */
    _this.prototype.httpUrl = {
      url:'https://easy-mock.com/mock/5d7cf23cfe3cb42ae532ac1b',  // 域名
    }
    /*
    * 封装的数据请求
    * url:  传入的api接口
    * params： 传入的参数
    * type：  请求类型（默认是post）
    */
    _this.prototype.httpRequest = (url,params,type='post')=>{
      return new Promise((resolve,reject)=>{
        _this.prototype.$axios({
          url:_this.prototype.httpUrl.url + url,
          method:type,
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data:_this.prototype.$qs.stringify(params)
        }).then(res=>{
           return resolve(res);
        }).catch(error=>{
          return reject(error);
        })
      })
    }
  }
}
