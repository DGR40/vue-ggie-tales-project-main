import { createRouter, createWebHistory } from 'vue-router'
import InitialCatalog from '../views/Initial-Catalog.vue'
import Catalog from '../views/Catalog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'initial-catalog',
      component: InitialCatalog
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/learn',
      name: 'learn',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Learn.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../views/Article.vue')
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/veg/:veg_id',
      name: 'veg_profile',
      component: () => import('@/views/VegProfile.vue')
    }
  ]
})

export default router
