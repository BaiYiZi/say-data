import request from '@/utils/request/index'

function yundong() {
  return new Promise((resolve) => {
    request.get('/place/atype').then((res) => {
      setTimeout(resolve, 0, res)
    })
  })
}

export {
  yundong
}