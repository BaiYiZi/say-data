import request from "../utils/request";

// 模拟测试接口
// export const getAttractionsCountData = () => {
//     return request({
//         url: "/attractions/count",
//         type: "get"
//     })
// }

// 获取景区详情
export const getAttractionsInfo = (name) => {
    return request({
        url: "/attractions1/attractions",
        type: "get",
        params: {
            name: name
        }
    })
}

// 各地区A级景区分布
export const getALevel = () => {
    return request({
        url: "/attractions/address",
        type: "get"
    })
}

// 某地区各级别景区占比
export function getLevelsByAddress(arg) {
    return request({
        url: "/attractions/level",
        type: "get",
        params: {
            address: arg
        }
    })
}

// 某地区某级别景区名录
export const getTourisAttractionByAddress = (address, level) => {
    return request({
        url: "/attractions/ml",
        type: "get",
        params: {
            address: address,
            level: level
        }
    })
}

// 适游指数
export const getTourworthy = () => {
    return request({
        url: "/passengerflow/tourworthy",
        type: "get"
    })
}

// 拥堵指数
export const getCongestion = () => {
    return request({
        url: "/passengerflow/congestion",
        type: "get"
    })
}

// 客流指数
export const getFootfall = () => {
    return request({
        url: "/passengerflow/footfall",
        type: "get"
    })
}

// 星级酒店数量
export const getHotelNumber = () => {
    return request({
        url: "/hotel/number",
        type: "get"
    })
}

// 保定一至四星级酒店占河北省一至四星级酒店数量的份额
export const getHotelOf = () => {
    return request({
        url: "/hotel/of",
        type: "get"
    })
}

// 保定五星级酒店占河北省五星级酒店的份额
export const getHotelFive = () => {
    return request({
        url: "/hotel/five",
        type: "get"
    })
}