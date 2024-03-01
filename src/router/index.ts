import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import WorklistPage from '../pages/WorklistPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/worklistPage'
  },
  {
    path: '/worklistPage',
    component: WorklistPage
  },
  {
    path: '/worklistPage/:id',
    component: () => import('../pages/ObjectPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
