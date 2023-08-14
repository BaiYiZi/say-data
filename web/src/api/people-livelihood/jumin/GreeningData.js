import request from '@/utils/request/index'

function GreeningData() {
    return new Promise((resolve) => {
        request.get('/greening').then((res) => {
            setTimeout(resolve, 0, res)
        })
    })
}

export {
    GreeningData
}