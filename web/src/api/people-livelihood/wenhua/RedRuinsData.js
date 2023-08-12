import request from '@/utils/request/index'

function RedRuinsData() {
  return new Promise((resolve) => {
    request.get('/redsite/list').then((res) => {
      setTimeout(resolve, 0, res)
    })
  })
}

export {
  RedRuinsData
}