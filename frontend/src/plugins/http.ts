import axios, { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import { Auth, Session } from '@/types/session'

const http = axios.create()

http.interceptors.request.use(config => {
  const session = Cookies.get('session')
  if (session) {
    const sessionJSON: Session = JSON.parse(session)
    config.headers = sessionJSON.tokens
  }

  return config
})

http.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.headers['access-token']) {
      const responseHeaders = response.headers
      const authHeaders: Auth = {
        'access-token': responseHeaders['access-token'],
        client: responseHeaders.client,
        expiry: responseHeaders.expiry,
        uid: responseHeaders.uid,
        'token-type': responseHeaders['token-type'],
      }

      const session = Cookies.get('session')
      if (session) {
        const sessionJSON: Session = JSON.parse(session)
        sessionJSON.tokens = authHeaders

        Cookies.set('session', JSON.stringify(sessionJSON), { expires: 14 })
      }
    }

    return response
  }
)

export default http
