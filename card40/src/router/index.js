import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
// import MainView from '../views/MainView.vue'
import PollView from '../views/PollView.vue'
import User from '../components/User.vue'
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

router.beforeEach((to) => {
  let open = localStorage.getItem("status");
  console.log(open);
  // console.log(to.path);
  // console.log(from);
  if(to.meta.auth && !open){
     
    return (
      {name:'home'}
    )
  }

});

// if(from.path == '/pollview'  ){
  //   next('/pollview');

  
  // const storedToken = JSON.parse(localStorage.getItem("userStatus"));
  // console.log("68called", storedToken);
  
  // // const storedToken = localStorage.getItem('authToken'); // Get the stored token from local storage
  // const logoutToken = 'YOUR_LOGOUT_TOKEN'; // The token you want to compare for logging out
  // const isAuthenticated = storedToken !== null && storedToken !== logoutToken;

  // if (to.meta.requiresAuth && !isAuthenticated) {
  //   // Redirect to the login page if not authenticated
  //   next('/login');
  // } else {
  //   // Allow the navigation to proceed
  //   next();
  // }
  // const userStatus = JSON.parse(localStorage.getItem("userStatus"));
  // if(from.path == '/pollview'  ){
  //   next('/pollview');

  // }
  // else {

  //   next();
  // }

  // console.log(userStatus.token);
  // console.log("70called",to,from);

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



// function checkIfUserIsAuthenticated() {
//   // Access the isAuthenticated state from your Vuex store
//   const isAuthenticated = store.state.auth.isAuthenticated;
//   return isAuthenticated;
// }

export default router
