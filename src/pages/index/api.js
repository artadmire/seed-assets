import { get } from '@/utils/request'

const api = {
    getBanner() { return get({
        url:'/pc/ads/query?positionId=1&pageSize=10&currentPage=1',
    })},
    getHomeGroupList(){
        return get({
            url:'/pc/home/group_list'
        })
    },
    getActiveList(){
        return get({
            url:'/pc/ads/query?positionId=15&pageSize=100&currentPage=1'
        })
    }
}
export default api