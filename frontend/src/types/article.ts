import { User } from './user'

export interface Article {
  id: number
  title: string
  text: string
  author: User
}
