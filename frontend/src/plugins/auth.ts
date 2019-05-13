import Cookies from 'js-cookie'
import http from './http'
import { Session } from '@/types/session'
import { User } from '@/types/user'

export const verifySession = (): string | boolean => {
  const session = Cookies.get('session')
  if (session) {
    const sessionJson: Session = JSON.parse(session)
    const { uid, client } = sessionJson.tokens
    return uid && client && sessionJson.tokens['access-token']
  } else {
    return false
  }
}

interface Response {
  data: User
  success: boolean
}

export const verifyToken = async (): Promise<Response> => {
  const response: Response = (await http.get('/api/auth/validate_token').catch(error => error.response)).data

  return response
}
