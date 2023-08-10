import request from '@/utils/request/index'

function feiyi() {
  return new Promise((resolve) => {
    request.get('/intangibleculturalheritage/category').then((res) => {
      setTimeout(resolve, 0, res)
    })
  })
}

export {
  feiyi
}