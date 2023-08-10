import request from '@/utils/request/index'

function huodong() {
  return new Promise((resolve) => {
    request.get('/activity/activity').then((res) => {
      setTimeout(resolve, 0, res)
    })
  })
}

export {
  huodong
}