import { User } from './user'

export interface Auth {
  'access-token': string
  client: string
  expiry: string
  uid: string
  'token-type': string
}

export interface Session {
  tokens: Auth
  user: User
}
