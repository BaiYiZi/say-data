import request from '@/utils/request/index'

function NumberOfAttractionsData() {
  return new Promise((resolve) => {
    request.get('/attractions/count').then((res) => {
      setTimeout(resolve, 0, res)
    })
  })
}

export {
  NumberOfAttractionsData
}