import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5366934e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _12f75569 = () => interopDefault(import('..\\pages\\education.vue' /* webpackChunkName: "pages_education" */))
const _31b2460e = () => interopDefault(import('..\\pages\\experience.vue' /* webpackChunkName: "pages_experience" */))
const _49c8d3ca = () => interopDefault(import('..\\pages\\interests.vue' /* webpackChunkName: "pages_interests" */))
const _27a36b51 = () => interopDefault(import('..\\pages\\skills.vue' /* webpackChunkName: "pages_skills" */))
const _731e6e13 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _5366934e,
    name: "about"
  }, {
    path: "/education",
    component: _12f75569,
    name: "education"
  }, {
    path: "/experience",
    component: _31b2460e,
    name: "experience"
  }, {
    path: "/interests",
    component: _49c8d3ca,
    name: "interests"
  }, {
    path: "/skills",
    component: _27a36b51,
    name: "skills"
  }, {
    path: "/",
    component: _731e6e13,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
