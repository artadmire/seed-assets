<template lang='pug'>
  header
    div.header 
      h1.logo 
        a(href='/',v-if='baseURL')
          img(:src='baseURL+"static/images/homepage_logo_img_link_desabled@3x.png"')
      ul
        li 
          a(href='/' :class='{active : isActive[0] }' ) {{ '首页' }} 
        li 
          a(href='business.html' :class='{active : isActive[1] }'  ) {{ '商家入驻' }} 
        li 
          a(href='download.html' :class='{active : isActive[2] }' ) {{ '下载App' }} 
        li 
          a(href='help.html' :class='{active : isActive[3] }'  ) {{ '帮助中心' }}
        li 
          a(href='merchant/home.html'   ) {{ '商家登录' }}
</template>

<script>
import baseURL  from '@/baseURL'
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js header',
      isActive: [true,false,false,false],
      baseURL : ''
    }
  },
  mounted () {
    this.baseURL = baseURL;
    //console.log(window.location.href.split('/'))
    var arr = window.location.href.split('/')
    if(arr[3] == 'business.html' || arr[3] == 'credentials.html' || arr[3] == 'condition.html') {
      for(var i = 0; i < 4; i++) {
        this.isActive[i] = false
      }
      this.isActive[1] = true
      this.isActive = this.isActive.slice();
    }else if (arr[3] == 'download.html') {
      for(var i = 0; i < 4; i++) {
        this.isActive[i] = false
      }
      this.isActive[2] = true
      this.isActive = this.isActive.slice();
    }else if (arr[3] == 'help.html') {
      for(var i = 0; i < 4; i++) {
        this.isActive[i] = false
      }
      this.isActive[3] = true
      this.isActive = this.isActive.slice();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '@/utils/reset.scss';

h1, h2 {
  font-weight: normal;
}
.logo {
  float: left; 
  width: 103px;
  height:64.4px;
  margin-top:21px;
}

.logo a {
  display: inline-block;
  width:100%;
  height: 100%;
}
.logo a img {
  width: 103px;
  height:64.4px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin:0;
  float: right;
  height:100%;
  line-height: 105px;
  width:580px;
}
li {
  display: inline-block;
  margin: 0 12px

}
ul li a {
  color: #42b983;
  text-decoration: none;
  color: #333234;
  font-size:18px;
  border-right:1px solid #333234;
  padding-right: 24px;
  font-family:PingFangSC-Regular;
}
li:nth-of-type(5) a {
  border-right: 0px;
}
header {
  height: 105px;
  width: 100%;
  background: #FFFFFF;
}
.header {
  width: 1200px;
  height:100%;
  margin:0 auto;
}
.active {
  color: #FF3766;
}

</style>
