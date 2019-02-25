import {get} from '@/utils/request'

const api = {
    // 二级导航列表
    getNavigation(){ return get({
        url:'/pc/navigation/query'
   })},
//    分类数据
   getGroupDetail(id){
       return get({
           url:'/pc/group/detail?id='+id
       })
   },
//    一分抽商品列表
   getDrawItemList(currentPage){
       return get({
            url:'/pc/draw/item_list?pageSize=12&currentPage='+currentPage
       })
   },
//    分期购商品列表
   getEasyPaymentItemList(groupId,currentPage){
        return get({
            url:'/pc/easy_payment/item_list?groupId='+groupId+'&pageSize=12&currentPage='+currentPage
        })
   },
//    品牌特卖专场列表
   getSessionItemList(groupId,currentPage){
        return get({
            url:'/pc/session/session_list?groupId='+groupId+'&pageSize=12&currentPage='+currentPage
        })
   },
//    拼团商品列表
   getPintuanItemList(groupId,currentPage){
        return get({
            url:'/pc/pintuan/item_list?groupId='+groupId+'&pageSize=12&currentPage='+currentPage
        })
    },
    getCentDrawQuery(){
        return get({
            url: 'pc/ads/query?positionId=17&pageSize=1&currentPage=1'
        })
    }

}

export default api;

