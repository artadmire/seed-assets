import { get, post } from '@/utils/request'

const api = {
    //请求二级类目
    getCategory(id) { return get({
        url:'/pc/settled/category_list',
        params: {
            id
        }
    })},
    //提交商家入驻信息
    postBusinessData(obj) { return post(obj) },
}
export default api