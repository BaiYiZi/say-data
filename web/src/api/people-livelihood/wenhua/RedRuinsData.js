import request from '@/utils/request/index'

function RedRuinsData() {
  console.log("123123")
  return new Promise((resolve) => {
    request.get('/redsite/list').then((res) => {
      setTimeout(resolve, 0, res)
    })
  })
}

export {
  RedRuinsData
}