import request from '@/utils/request/index'

function ProgramData() {
    return new Promise((resolve) => {
        request.get('/culturalinstitutions/program').then((res) => {
            setTimeout(resolve, 0, res)
        })
    })
}

export {
    ProgramData
}