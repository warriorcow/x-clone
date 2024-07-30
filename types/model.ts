export interface MenuLink {
  id: number
  url: string
  text: string
  icon: string
}

export interface User {
  id: number
  name: string
  lastname: string
  nickname: string
  description?: string
  personalSite?: string
  location: string
  job: string
  birthday: Date
  joinedDate: Date
  verified: boolean
  avatar?: string
  cover?: string
  stats: {
    followers: number
    following: number
  }
  posts: any[]
  replies: any[]
  highlights: any[]
  media: any[]
}
