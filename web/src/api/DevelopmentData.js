import request from "../utils/request";

// 公园数量
export const getParkgreenAreas = () => {
    return request({
        url: "/parkgreen/areas",
        type: "get"
    })
}

// 包含公园的区
export const getParkAreaList = () => {
    return request({
        url: "/park/area",
        type: "get"
    })
}

// 某一地区公园名录
export const getParkList = (address) => {
    return request({
        url: "/park/park",
        type: "get",
        params: {
            address: address
        }
    })
}

// 文旅活动频率
export const getActivity = (year) => {
    return request({
        url: "/activity/activity",
        type: "get",
        params: {
            year: year
        }
    })
}

// 国内外游客数量
export const getRevenueNumber = () => {
    return request({
        url: "/revenue/number",
        type: "get"
    })
}

// 国内外游客创收
export const getRevenueDrevenue = () => {
    return request({
        url: "/revenue/drevenue",
        type: "get"
    })
}

// 各地博物馆分布
export const getMuseumAddress = () => {
    return request({
        url: "/museum/address",
        type: "get"
    })
}

// 各博物馆访问人次
export const getMuseumVisitors = () => {
    return request({
        url: "/museum/visitors",
        type: "get"
    })
}

// 某地区博物馆名录
export const getMuseumList = (address) => {
    return request({
        url: "/museum/list",
        type: "get",
        params: {
            address: address
        }
    })
}

// 某博物馆详细信息
export const getMuseumInfo = (name) => {
    return request({
        url: "/museum/museum",
        type: "get",
        params: {
            name: name
        }
    })
}