import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import MainView from '../views/MainView.vue'
import PollView from '../views/PollView.vue'
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
    name:'SignUp',
    component: SignupForm,
    meta: { requiresAuth: false },
  },
  {
    path: '/components/LoginForm',
    name:'Login',
    component: LoginForm,
    meta: { requiresAuth: false },

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
    component: MainView,
    meta: { auth: true },
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

// router.beforeEach((to, from, next) => {
//   // console.log(to);
//   if (to.meta.auth && 
//     !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
//     ) {
//       next('/login');
//     }
//  });
router.beforeEach((to, from) => {
  console.log(to);
  console.log(from);
  const userStatus = JSON.parse(localStorage.getItem("userStatus"));
  console.log(userStatus.token);
  // if(token==admin){
  //   router.push('/mainview')
  // }

  // console.log(localStorage.getItem());
  // if (to.path === '/mainview' && !store.state.isAuthenticated ) {
  //   if (to.path === '/mainview' ) {
  //   alert("login first")
  //   router.push('/components/LoginForm')
  
  // } 
 
  // else {
  //   next();
  //   async loginDetails({commit}, loginCredential) {

  //     const res = await axios.post(`http://65.108.77.50:3031/login?username=${loginCredential.username}&password=${loginCredential.password}`);
  //     commit("Set_login_status", res.data);
  //     console.log("Data login success  ", res.data);
  //     // this.$router.push('/mainview')
  // },

  // }
  
});

// function checkIfUserIsAuthenticated() {
//   // Access the isAuthenticated state from your Vuex store
//   const isAuthenticated = store.state.auth.isAuthenticated;
//   return isAuthenticated;
// }

export default router
