import { get } from '@/utils/request'

const api = {
    //请求一级类目
    getLevelCategory(id) { return get({
        url:'/pc/settled/category_list',
        params: {
            id
        }
    })},
    //请求二级类目
    getCategory() { return get({
        url:'/pc/settled/secondary_category_list',
    })},
    //请求类目入驻要求
    getCategoryRequest(id) { return get({
        url:'/pc/settled/condition?categoryId='+id
    })},
}
export default api