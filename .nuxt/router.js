import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _eec951a4 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _56672949 = () => interopDefault(import('..\\pages\\education.vue' /* webpackChunkName: "pages_education" */))
const _11b18519 = () => interopDefault(import('..\\pages\\experience.vue' /* webpackChunkName: "pages_experience" */))
const _e58eb0ac = () => interopDefault(import('..\\pages\\interests.vue' /* webpackChunkName: "pages_interests" */))
const _cdf1b91e = () => interopDefault(import('..\\pages\\skills.vue' /* webpackChunkName: "pages_skills" */))
const _af599c1a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _eec951a4,
    name: "about"
  }, {
    path: "/education",
    component: _56672949,
    name: "education"
  }, {
    path: "/experience",
    component: _11b18519,
    name: "experience"
  }, {
    path: "/interests",
    component: _e58eb0ac,
    name: "interests"
  }, {
    path: "/skills",
    component: _cdf1b91e,
    name: "skills"
  }, {
    path: "/",
    component: _af599c1a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
