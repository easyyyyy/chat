import axios, { AxiosResponse, AxiosRequestConfig, AxiosError, Method } from 'axios'

const instance = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    // 'Cookie': cookie,
  },
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => Promise.reject(error)
)

function request(url: string, method: Method = 'GET', params: any, options: AxiosRequestConfig): Promise<AxiosResponse> {
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
