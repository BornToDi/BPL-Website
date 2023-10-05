
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/image', component: () => import('pages/imageAdd.vue') },
      { path: '/single', component: () => import('pages/singleImg.vue') },
      { path: '/bsti', component: () => import('pages/bstiPhoto.vue') },
       { path: '/video', component: () => import('pages/videoBsti.vue') },
       { path: '/oldday', component: () => import('pages/oldDays.vue') }
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
