import Cookies from 'js-cookie'
import { Session } from '@/types/session'

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
