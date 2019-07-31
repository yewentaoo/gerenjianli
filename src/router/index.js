import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import AboutMe from '../components/aboutme'
import Skill from '../components/skill'
import Myexp from '../components/myexp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/aboutme',
      component: AboutMe
    },
    {
      path: '/skill',
      component: Skill
    },
    {
      path: '/myexp',
      component: Myexp
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
