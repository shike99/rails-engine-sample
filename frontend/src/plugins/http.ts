import axios from 'axios'
import Cookies from 'js-cookie'
import { Session } from '@/types/session'

const http = axios.create()

http.interceptors.request.use(config => {
  const session = Cookies.get('session')
  if (session) {
    const sessionJSON: Session = JSON.parse(session)
    config.headers = sessionJSON.tokens
  }

  return config
})

export default http
