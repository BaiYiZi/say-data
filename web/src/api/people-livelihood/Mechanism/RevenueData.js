import request from '@/utils/request/index'

function RevenueData() {
    return new Promise((resolve) => {
        request.get('/revenue/list').then((res) => {
            setTimeout(resolve, 0, res)
        })
    })
}

export {
    RevenueData
}