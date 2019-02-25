import {get} from '@/utils/request'

const api = {
    // 活动页
    getAdsDetail(id){ return get({
        url:'/pc/ads/get?id='+id
   })},

}

export default api;
