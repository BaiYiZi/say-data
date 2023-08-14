import request from '@/utils/request/index'

function HotelQuantityData() {
    return new Promise((resolve) => {
        request.get('/hotel/quantity').then((res) => {
            setTimeout(resolve, 0, res)
        })
    })
}

export {
    HotelQuantityData
}