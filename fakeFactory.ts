import type { User, Trend } from "~/types/model";

export function fakeUser(params: Partial<User> = {}): User {
  return {
    id: 0,
    firstname: 'Piter',
    lastname: 'Griffin',
    nickname: 'family_guy',
    description: 'I love mock',
    externals: {
      job: {
        text: 'Fake Developer',
        link: null
      },
      location: {
        text: 'Earth',
        link: null
      },
      personalSite: {
        text: 'fake.com',
        link: 'https://fake.com/'
      },
      birthday: {
        text: new Date().toDateString(),
        link: null
      },
      joinedDate: {
        text: new Date().toDateString(),
        link: null
      }
    },
    verified: true,
    avatar: 'https://avatarfiles.alphacoders.com/654/65454.png',
    cover: 'https://www.catsbest.eu/wp-content/uploads/shutterstock_423592375_2560x800-1920x600.jpg',
    stats: {
      followers: 999,
      following: 999
    },
    posts: [],
    replies: [],
    highlights: [],
    media: [],
    ...params
  }
}

export function fakeTrend(params: Partial<Trend> = {}): Trend {
  return {
    id: 0,
    title: '#Trump',
    category: 'Policy',
    postsCount: 231,
    ...params
  }
}
