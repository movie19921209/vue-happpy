import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const Foo = {template : '<div>foo</div>'};
const Bar = {template : '<div>bar</div>'};

const routes = [
  {
    path: '/',
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
]

const router = new VueRouter({
  routes
})

export default router
