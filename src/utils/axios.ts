const axios = require('axios')

const instance = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    // 'Cookie': cookie,
  },
})

instance.interceptors.request.use(
  (config: any) => {
    return config
  },
  (error: any) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response: any) => {
    return response.data
  },
  (error: any) => Promise.reject(error)
)

function request(url: string, method = 'GET', params: any, options: any): Promise<any> {
  const paramObj = Object.assign({}, params)
  const { queryParams, sendParams } = paramObj

  return instance.request({
    method,
    url,
    data: sendParams,
    params: queryParams,
    ...options,
  })
}

export default request
