import request from "../utils/request";

// 非遗等级
export const getIntangibleculturalheritageLevel = () => {
    return request({
        url: "/intangibleculturalheritage/level",
        type: "get"
    })
}

// 各类文化保护单位数量
export const getCulturalProtectionType = () => {
    return request({
        url: "/culturalProtection/type",
        type: "get"
    })
}

// 红色展厅信息
export const getRed = () => {
    return request({
        url: "/red/red",
        type: "get"
    })
}

// 公共图书馆、博物馆数量建设趋势
export const getCulturalinstitutionsList = () => {
    return request({
        url: "/culturalinstitutions/list",
        type: "get"
    })
}

// 广播电视节目综合人口覆盖率
export const getCulturalinstitutionsProgram = () => {
    return request({
        url: "/culturalinstitutions/program",
        type: "get"
    })
}

