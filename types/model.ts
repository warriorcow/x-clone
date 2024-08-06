export interface MenuLink {
  id: number
  url: string
  text: string
  icon: string
}

export interface ExternalParams {
  text: string
  link: string | null
}

export interface User {
  id: number
  firstname: string
  lastname: string
  nickname: string
  description?: string
  externals: {
    personalSite?: ExternalParams
    location: ExternalParams
    job: ExternalParams
    birthday: ExternalParams
    joinedDate: ExternalParams
  }
  verified: boolean
  avatar?: string
  cover?: string
  stats: {
    followers: number
    following: number
  }
  tabs: Tabs
}

export interface Tabs {
  posts: TabUser
  replies: TabUser
  highlights: TabUser
  media: TabUser
}
export interface TabUser {
  url: string
  data: any[]
}

export interface Trend {
  id: number
  category: string
  title: string
  postsCount: number
}
