import request from '@/utils/request/index'
function test() {
  return new Promise((resolve) => {
    request.get('/get').then((res) => {
      setTimeout(resolve, 500, res)
    })
  })
}

export {
  test
}