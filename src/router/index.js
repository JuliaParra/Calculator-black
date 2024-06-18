import { createRouter, createWebHistory } from 'vue-router'
import Calculatorview from '../views/Calculatorview.vue'
import Tiempoview from '../views/Tiempoview.vue'
import Divisasview from '@/views/divisasview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'calculator',
      component: Calculatorview
    },
    {
      path: '/tiempo',
      name: 'tiempo',
      component: Tiempoview
    },
    {
      path: '/divisas',
      name: 'divisas',
      component: Divisasview
    }
  ]
})

export default router
