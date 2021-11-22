import axios, { AxiosResponse, AxiosRequestConfig, AxiosError, Method } from 'axios'
import { RequestParams } from '@/types/api'

const instance = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    // 'Cookie': cookie,
  },
  //baseURL: 'http://127.0.0.1:3000',
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

function request(url: string, method: Method = 'GET', params: RequestParams, options: AxiosRequestConfig): Promise<any> {
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
