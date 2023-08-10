import request from '@/utils/request/index'

function NumberOfPlacesAccommodationData() {
  return new Promise((resolve) => {
    request.get('/accommodationservices/list').then((res) => {
      setTimeout(resolve, 0, res)
    })
  })
}

export {
  NumberOfPlacesAccommodationData
}