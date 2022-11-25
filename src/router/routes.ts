import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  {
    path: '/modas',
    component: () => import('layouts/FashionLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FashionPage.vue') }
    ]
  },

  {
    path: '/crypto',
    component: () => import('layouts/CryptoLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CryptoPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
