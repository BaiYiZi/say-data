import request from '@/utils/request/index'

function wenbao() {
  return new Promise((resolve) => {
    request.get('/culturalProtection/type').then((res) => {
      setTimeout(resolve, 0, res)
    })
  })
}

export {
  wenbao
}