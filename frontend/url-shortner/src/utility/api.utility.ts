import instance from './axios.utility';

export default {
    get(url: any, params: any) {
        return instance.get(url, { params })
    },
    post(url: any, data: any, params: any) {
        return instance.post(url, data, { params: { ...params } })
    },
    patch(url: any, data: any) {
        return instance.patch(url, data)
    },
    delete(url: any, data: any) {
        return instance.delete(url, { data })
    }
};