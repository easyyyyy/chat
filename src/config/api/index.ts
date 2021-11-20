import request from '@/utils/axios'

const gnRequest = function(url: string, method: string, options: any) {
  return function(params: any): any {
    request(url, method, params, options)
  }
}

const login = gnRequest('/api/user/signin', 'POST', {})
