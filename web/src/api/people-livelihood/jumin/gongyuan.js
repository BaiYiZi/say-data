import request from '@/utils/request/index'

function gongyuan() {
  return new Promise((resolve) => {
    request.get('/place/park').then((res) => {
      setTimeout(resolve, 0, res)
    })
  })
}

export {
  gongyuan
}