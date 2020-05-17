import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    redirect: '/compute-bio'
  },
  {
    path: '/compute-bio',
    name: 'ComBio',
    component: () => import('../views/ComBio.vue'),
    meta: {
      title: '计算生物学'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: '关于'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta && to.meta.title ? to.meta.title + ' - BioSearch' : 'BioSearch'
  next()
})

export default router
