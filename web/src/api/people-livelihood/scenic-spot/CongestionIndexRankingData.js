import request from '@/utils/request/index'

function CongestionIndexRankingData() {
  return new Promise((resolve) => {
    request.get('/passengerflow/congestion').then((res) => {
      setTimeout(resolve, 0, res)
    })
  })
}

export {
  CongestionIndexRankingData
}