import { createStore } from 'vuex'
import login from './modules/login'
import signup from './modules/signup'
import poll from './modules/poll'
export default createStore({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    login,
    signup,
    poll
  }
})
