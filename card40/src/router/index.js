import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import MainView from '../views/MainView.vue'
import PollView from '../views/PollView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/components/SignupForm',
    name:'SignUp',
    component: SignupForm,
  },
  {
    path: '/components/LoginForm',
    name:'Login',
    component: LoginForm,

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/mainview',
    name: 'main',
    component: MainView
  },
  {
    path: '/pollview',
    name: 'poll',
    component: PollView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
