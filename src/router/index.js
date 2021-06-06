import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Foo from '../views/Foo.vue'
import Bar from '../views/Bar.vue'
import Account from '../views/account.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
	redirect: 'account'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	component:About
  },
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar},
  {
    path: '/account',
	name: 'Account',
    component: Account,
	
	children: [
		{
          path: 'login',
          component: Login
        },
        {
          path: 'register',
          component: Register
		}
	]
  },
]

const router = new VueRouter({
  routes
})

export default router
