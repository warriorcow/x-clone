import type { MenuLink, User } from "~/types/model";

export const menu: MenuLink[] = [
    {
      id: 1,
      text: "Home",
      icon: "home",
      url: "/"
    },
    {
      id: 2,
      text: "Explore",
      icon: "explore",
      url: "/explore"
    },
    {
      id: 3,
      text: "Notifications",
      icon: "notifications",
      url: "/notifications"
    },
    {
      id: 4,
      text: "Messages",
      icon: "messages",
      url: "/messages"
    },
    {
      id: 5,
      text: "Lists",
      icon: "lists",
      url: "/lists"
    },
    {
      id: 6,
      text: "Bookmarks",
      icon: "bookmarks",
      url: "/bookmarks"
    },
    {
      id: 7,
      text: "Communities",
      icon: "communities",
      url: "/communities"
    },
    {
      id: 8,
      text: "Verified Orgs",
      icon: "verified-orgs",
      url: "/verified-orgs"
    },
    {
      id: 9,
      text: "Profile",
      icon: "profile",
      url: "/profile"
    },
    {
      id: 10,
      text: "More",
      icon: "more",
      url: "/more"
    }
];
export const user: User = {
  id: 0,
  name: 'Ilia',
  lastname: 'Borisov',
  nickname: 'fj',
  description: 'Developing Products that Users Love',
  personalSite: 'fj.com',
  location: 'Earth',
  job: 'Frontend Developer',
  birthday: new Date(),
  joinedDate: new Date(),
  verified: true,
  avatar: 'https://media.tenor.com/qn8JutHbzYgAAAAM/cat-cute.gif',
  cover: 'https://www.catsbest.eu/wp-content/uploads/shutterstock_423592375_2560x800-1920x600.jpg',
  stats: {
    followers: 948,
    following: 132
  },
  posts: [],
  replies: [],
  highlights: [],
  media: [],
}
