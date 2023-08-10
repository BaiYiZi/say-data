import request from '@/utils/request/index'

function changsuo() {
  return new Promise((resolve) => {
    request.get('/place/number').then((res) => {
      setTimeout(resolve, 0, res)
    })
  })
}

export {
  changsuo
}