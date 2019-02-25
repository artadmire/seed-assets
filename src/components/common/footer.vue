<template lang='pug'>
  footer
    div.footer
      ul.footer-code
        li
          img(:src='baseURL+"static/images/guanzhu.png"')
          span {{ '扫二维码 微信关注' }}
        li
          img(:src='baseURL+"static/images/download.jpg"')
          span {{ '扫二维码下载app' }}
        li
          img(:src='baseURL+"static/images/xiaochengxu.jpg"')
          span {{ '扫二维码关注小程序' }} 
      div.footer-info
        p {{ '联系我们' }}
        div.telephon
          span {{ '客户热线' }}
          span {{ '010-62981200' }}
        div.work-time
          span {{ '工作时间' }}
          span {{ '周一至周五 09:00-21:00' }}
      ul.footer-menu
        li
          a(href='business.html' ) {{ '商家入驻' }}
        li
          a(href='help.html' ) {{ '帮助中心' }}
        li
          a(href='download.html' ) {{ '下载App' }}
        li
          a(href='rule.html' ) {{ '爆好货规则' }}
        li
          a(href='about.html' ) {{ '关于我们' }} 
</template>

<script>
import baseURL  from '@/baseURL'
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js footer',
      baseURL:''
    }
  },
  mounted(){
    this.baseURL = baseURL;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '@/utils/reset.scss';
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
  } 
}

.footer-code {
  width: 650px;
  height:175px;
  display: flex;
  padding:0 10px 0 60px;
  border-right:1px solid #DEE1E7;
  float: left;
  margin-bottom: 60px;
  li {
    display: flex;
    flex-direction: column;
    margin-right:60px;
    align-items: center;
    img {
      width:157px;
      height:157px;
    }
    span {
      font-size: 16px;
      color: #333234;
      line-height: 22px;
      margin-top:5px;
    }
  }
}

footer {
  width:100%;
  height:430px;
  background: #FFFFFF;
  .footer {
    height:370px;
    width:1200px;
    margin:0 auto;
    padding-top:60px;
      .footer-info {
        float: left;
        padding-left:70px;
          p {
            font-size: 24px;
            color: #333234;
           
            margin-top:45px;
            margin-bottom: 30px;
          }
          .telephon {
            margin: 13px 0 20px 0;
            span:last-child {
              font-size: 30px;
              color: #333234;
             
              text-align: right;
              line-height: 42px;
              font-family: PingFangSC-Medium;
            }
          }
          
      }
  }
}

.telephon span:first-child,.work-time span:first-child {
  font-size: 16px;
  color: #737373;
  
  margin-right: 50px;
}

.work-time span:last-child {
  font-size: 16px;
  color: #333234;
 
  text-align: right;
  line-height: 22px;
}
.footer-menu {
  clear: both;
  margin-left: 35px;
  li {
    a {
      padding: 0 25px;
      border-right: 1px solid #737373;
      font-size: 18px;
      color: #676767;
      text-align: left;
      text-decoration: none;
    }
  }
}

.footer-menu li:last-child a {
  border:0
}
</style> 
