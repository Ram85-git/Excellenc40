import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
// import MainView from '../views/MainView.vue'
import PollView from '../views/PollView.vue'
import User from '../components/User.vue'
// import Polls from '../components/Polls.vue'
// import store from '../store/index'
// import { IS_USER_AUTHENTICATE_GETTER } from '../store/index'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/components/SignupForm',
    name: 'SignUp',
    component: SignupForm,
    // meta: { auth: true },
  },
  {
    path: '/components/User',
    name: 'user',
    component: User,
    meta: { auth : true },
    
  },

  // {
  //   path: '/components/Polls',
  //   name: 'polls',
  //   component: Polls,
  //   // meta: { auth : true }

  // },

  {
    path: '/components/LoginForm',
    name: 'Login',
    component: LoginForm,
    // meta: { auth: true },

  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  // {
  //   path: '/mainview',
  //   name: 'main',
  //   component: MainView,
  //   meta: { auth: true },
  // },

  {
    path: '/pollview',
    name: 'poll',
    component: PollView,
    meta: { auth : true },
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from , next) => {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  // console.log(to.path);
  // console.log(from);
  if(to.meta.auth && !user){
     next('/')
  }
  else {
    next()
  }
});


export default router
