import commonApi from './commonApi'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export function formData(){
    return 'suolun'
}

export async function getImgUrlPrefix(){
    if(!localStorage.imgUrlPrefix ){
        let wipData = await commonApi.getImgUrlPrefix();
        localStorage.imgUrlPrefix = wipData+'/';
    } 
    
}

//判断手机号
export function checkMobile(str) {
    var re = /^1\d{10}$/
    if (re.test(str)) {
      return true
    } else {
        Message({
            message:'请输入正确的手机号码',
            type:'error'
          })
      return false
    }
  }

