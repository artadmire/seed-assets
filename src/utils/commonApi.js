import {get} from '@/utils/request'

const api = {
    getImgUrlPrefix(){ return get({
        url:'/pc/common/img_url_prefix'
   })},
}

export default api;

