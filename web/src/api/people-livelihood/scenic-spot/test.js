import request from '@/utils/request/index'

function test() {
  return new Promise((resolve) => {
    request.get('/get').then((res) => {
      setTimeout(resolve, 2000, res)
    })
  })
}

export {
  test
}