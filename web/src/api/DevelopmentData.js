import request from "../utils/request";

// 公园数量
export const getParkgreenAreas = () => {
    return request({
        url: "/parkgreen/areas",
        type: "get"
    })
}

// 文旅活动频率
export const getActivity = () => {
    return request({
        url: "/activity/activity",
        type: "get"
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