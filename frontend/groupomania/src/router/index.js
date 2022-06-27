import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilView from '../views/ProfilView.vue'
import SigninView from '../views/SigninView.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfilView


  },
  {
    path: '/signin',
    name: 'signinView',
    component: SigninView

  }
]

const router = new VueRouter({
  routes
})

export default router