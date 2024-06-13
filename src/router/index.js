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
      path: '/',
      name: 'tiemp',
      component: Tiempoview
    },
    {
      path: '/',
      name: 'div',
      component: Divisasview
    }
  ]
})

export default router
