import request from '@/utils/request/index'

function ScenicTrafficData() {
  return new Promise((resolve) => {
    request.get('/passengerflow/list').then((res) => {
      setTimeout(resolve, 0, res)
    })
  })
}

export {
  ScenicTrafficData
}