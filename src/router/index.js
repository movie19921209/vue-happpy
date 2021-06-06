import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Item from '../views/item.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
	redirect: 'Home'
  },
  {
	path: '/Item',
	name: 'Item',
	component: Item
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
