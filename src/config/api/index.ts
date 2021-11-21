import request from '@/utils/axios'
import { Method, AxiosResponse, AxiosRequestConfig } from 'axios'
import { RequestParams } from '@/types/api'

const gnRequest = function(url: string, method: Method, options: AxiosRequestConfig) {
  return function(params: RequestParams): Promise<AxiosResponse> {
    return request(url, method, params, options)
  }
}

const login = gnRequest('/api/user/signin', 'POST', {})

export {
  login,
}
