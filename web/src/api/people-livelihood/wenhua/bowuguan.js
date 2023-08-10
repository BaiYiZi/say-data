import request from '@/utils/request/index'

function bowuguan() {
  return new Promise((resolve) => {
    request.get('/museum/address').then((res) => {
      setTimeout(resolve, 0, res)
    })
  })
}

export {
  bowuguan
}