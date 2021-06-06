import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Account from '../views/account.vue'

Vue.use(VueRouter)

const Foo = {template : '<div>foo</div>'};
const Bar = {template : '<div>bar</div>'};
const Login = {template: '<div>登录的组件显示</div>'};
const Register = {template: '<div>注册的组件显示</div>'};

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
