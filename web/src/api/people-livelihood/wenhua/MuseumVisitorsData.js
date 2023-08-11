import request from '@/utils/request/index'

function MuseumVisitorsData() {
    return new Promise((resolve) => {
        request.get('/museum/visitors').then((res) => {
            setTimeout(resolve, 0, res)
        })
    })
}

export {
    MuseumVisitorsData
}