import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/User/Profile'
import SigunUp from '@/components/User/SigunUp'
import SigunIn from '@/components/User/SigunIn'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/SigunUp',
      name: 'SigunUp',
      component: SigunUp
    },
    {
      path: '/SigunIn',
      name: 'SigunIn',
      component: SigunIn
    },
    {
      path: '/Meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/Meetup/New',
      name: 'CreateMeetup',
      component: CreateMeetup
    }
  ],
  mode:'history'
})
