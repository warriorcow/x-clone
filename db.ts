import type { MenuLink, User, Trend } from "~/types/model";
import {fakeTrend, fakeUser} from "~/fakeFactory";

export const menu: MenuLink[] = [
    {
      id: 1,
      text: "Home",
      icon: "svgo-home",
      url: "/"
    },
    // {
    //   id: 2,
    //   text: "Explore",
    //   icon: "svgo-explore",
    //   url: "/explore"
    // },
    // {
    //   id: 3,
    //   text: "Notifications",
    //   icon: "svgo-notifications",
    //   url: "/notifications"
    // },
    // {
    //   id: 4,
    //   text: "Messages",
    //   icon: "svgo-messages",
    //   url: "/messages"
    // },
    // {
    //   id: 5,
    //   text: "Lists",
    //   icon: "svgo-lists",
    //   url: "/lists"
    // },
    // {
    //   id: 6,
    //   text: "Bookmarks",
    //   icon: "svgo-bookmarks",
    //   url: "/bookmarks"
    // },
    // {
    //   id: 7,
    //   text: "Communities",
    //   icon: "svgo-communities",
    //   url: "/communities"
    // },
    // {
    //   id: 8,
    //   text: "Verified Orgs",
    //   icon: "svgo-verified-orgs",
    //   url: "/verified-orgs"
    // },
    {
      id: 9,
      text: "Profile",
      icon: "svgo-profile",
      url: "/@fj"
    },
    // {
    //   id: 10,
    //   text: "More",
    //   icon: "svgo-more",
    //   url: "/more"
    // }
];
export const users: User[] = [
  fakeUser(  {
    id: 0,
    firstname: 'Ilia',
    lastname: 'Borisov',
    nickname: 'fj',
    description: 'Developing Products that Users Love',
    externals: {
      job: {
        text: 'Frontend Developer',
        link: null
      },
      location: {
        text: 'Earth',
        link: null
      },
      personalSite: {
        text: 'fj.com',
        link: 'https://fj.com/'
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
    avatar: 'https://media.tenor.com/qn8JutHbzYgAAAAM/cat-cute.gif',
    cover: 'https://www.catsbest.eu/wp-content/uploads/shutterstock_423592375_2560x800-1920x600.jpg',
    stats: {
      followers: 948,
      following: 132
    }
  }),
  fakeUser({
    id: 1,
    firstname: 'Питер',
    lastname: 'Гриффин',
    nickname: 'peter_family_guy',
    description: 'I am the main character',
    externals: {
      job: {
        text: 'Safety Inspector',
        link: null
      },
      location: {
        text: 'Quahog',
        link: null
      },
      personalSite: {
        text: 'peter.com',
        link: 'https://peter.com/'
      },
      birthday: {
        text: new Date(1966, 11, 2).toDateString(),
        link: null
      },
      joinedDate: {
        text: new Date().toDateString(),
        link: null
      }
    },
    verified: true,
    avatar: 'https://wallstreetinsanity.com/wp-content/uploads/Family-Guy-Peter-Griffin-Started-An-Instagram-Account-And-Its-Exactly-What-Youd-Expect-From-Him.jpg',
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXsdsTZ5ToznmgR3OWLRAph6tPV1vNiFgMQ&s',
    stats: {
      followers: 1000,
      following: 500
    },
    tabs: {
      posts: {
        url: '',
        data: ['peter posts']
      },
      replies: {
        url: 'replies',
        data: ['peter replies']
      },
      highlights: {
        url: 'highlights',
        data: ['peter highlights']
      },
      media: {
        url: 'media',
        data: ['peter media']
      },
    }
  }),
  fakeUser({
    id: 2,
    firstname: 'Lois',
    lastname: 'Griffin',
    nickname: 'lois_family_guy',
    description: 'I love my family',
    externals: {
      job: {
        text: 'Housewife',
        link: null
      },
      location: {
        text: 'Quahog',
        link: null
      },
      personalSite: {
        text: 'lois.com',
        link: 'https://lois.com/'
      },
      birthday: {
        text: new Date(1975, 5, 22).toDateString(),
        link: null
      },
      joinedDate: {
        text: new Date().toDateString(),
        link: null
      }
    },
    verified: true,
    avatar: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/07/lois-griffin.jpg',
    cover: 'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg',
    stats: {
      followers: 500,
      following: 300
    }
  }),
  fakeUser({
    id: 3,
    firstname: 'Stewie',
    lastname: 'Griffin',
    nickname: 'stewie_family_guy',
    description: 'I am a baby genius',
    externals: {
      job: {
        text: 'Baby',
        link: null
      },
      location: {
        text: 'Quahog',
        link: null
      },
      personalSite: {
        text: 'stewie.com',
        link: 'https://stewie.com/'
      },
      birthday: {
        text: new Date(1999, 1, 18).toDateString(),
        link: null
      },
      joinedDate: {
        text: new Date().toDateString(),
        link: null
      }
    },
    verified: true,
    avatar: 'https://cdn.dribbble.com/users/6570629/screenshots/15511980/baloons.png',
    cover: 'https://www.texasgunclub.com/wp-content/uploads/2020/11/Weapons-and-military-equipment-1024x682-1.jpg',
    stats: {
      followers: 200,
      following: 100
    }
  }),
  fakeUser({
    id: 4,
    firstname: 'Brian',
    lastname: 'Griffin',
    nickname: 'brian_family_guy',
    description: 'I am a talking dog',
    externals: {
      job: {
        text: 'Writer',
        link: null
      },
      location: {
        text: 'Quahog',
        link: null
      },
      personalSite: {
        text: 'brian.com',
        link: 'https://brian.com/'
      },
      birthday: {
        text: new Date(1998, 2, 14).toDateString(),
        link: null
      },
      joinedDate: {
        text: new Date().toDateString(),
        link: null
      }
    },
    verified: true,
    avatar: 'https://www.the-sun.com/wp-content/uploads/sites/6/2023/09/ZA-BRIAN-GRIFFIN-OP.jpg?strip=all&quality=100&w=1920&h=1080&crop=1',
    cover: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop ',
    stats: {
      followers: 600,
      following: 450
    }
  }),
  fakeUser({
    id: 5,
    firstname: 'Chris',
    lastname: 'Griffin',
    nickname: 'chris_family_guy',
    description: 'I am a teenager',
    externals: {
      job: {
        text: 'Student',
        link: null
      },
      location: {
        text: 'Quahog',
        link: null
      },
      personalSite: {
        text: 'chris.com',
        link: 'https://chris.com/'
      },
      birthday: {
        text: new Date(2002, 8, 27).toDateString(),
        link: null
      },
      joinedDate: {
        text: new Date().toDateString(),
        link: null
      }
    },
    verified: false,
    avatar: 'https://www.jammable.com/_next/image?url=https%3A%2F%2Fimagecdn.voicify.ai%2Fmodels%2Feff9456f-aec5-4fd1-b2af-30b753992d02.png&w=3840&q=100',
    cover: 'https://i.ytimg.com/vi/psfnYGRkziA/maxresdefault.jpg',
    stats: {
      followers: 150,
      following: 200
    }
  }),
]
export const authUser = users[0];
export const friendsRecommendation: User[] = [
  ...users
]
export const trends: Trend[] = [
  fakeTrend({
    id: 1
  }),
  fakeTrend({
    id: 2,
    title: '#Obama'
  }),
  fakeTrend({
    id: 3,
    title: '#SCSS',
    category: 'Programming'
  }),
  fakeTrend({
    id: 4,
    title: '#Cat',
    category: 'Pets'
  }),
  fakeTrend({
    id: 5,
    title: '#Elden Ring',
    category: 'Games'
  }),
  fakeTrend({
    id: 6,
    title: '#Sandwiches',
    category: 'Food'
  })
]
