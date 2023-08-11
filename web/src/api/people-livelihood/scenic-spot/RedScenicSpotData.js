import request from '@/utils/request/index'

function RedScenicSpotData() {
  return new Promise((resolve) => {
    request.get('/attractions/red').then((res) => {
      setTimeout(resolve, 2000, res)
    })
  })
}

export {
  RedScenicSpotData
}