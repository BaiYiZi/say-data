import request from '@/utils/request/index'

function HotelDensityData() {
    return new Promise((resolve) => {
        request.get('/hotel/add').then((res) => {
            setTimeout(resolve, 0, res)
        })
    })
}

export {
    HotelDensityData
}