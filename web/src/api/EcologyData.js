import request from "../utils/request";

// 公园绿地面积
export const getParkGreenbelt = () => {
    return request({
        url: "/greenbelt/park",
        type: "get"
    })
}

// 城市绿地面积
export const getCityGreenbelt = () => {
    return request({
        url: "/greenbelt/green",
        type: "get"
    })
}

// 城市绿化覆盖面积
export const getGreeneryCoverage = () => {
    return request({
        url: "/greenbelt/greenbelt",
        type: "get"
    })
}

// PM.25含量
export const getPm = () => {
    return request({
        url: "/greenbelt/pm",
        type: "get"
    })
}

// 城市森林覆盖率
export const getForestGreenbelt = () => {
    return request({
        url: "/greenbelt/forest",
        type: "get"
    })
}