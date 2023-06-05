import { createRouter, createWebHistory } from 'vue-router'
import EmployeeView from '@/views/EmployeeView.vue'
import AssetsView from '@/views/AssetsView.vue'

export const routes = [
  {
    path: '/',
    name: 'Empleados',
    icon: 'mdi-account',
    component: EmployeeView
  },
  {
    path: '/asset',
    name: 'Activos',
    icon: 'mdi-office-building',
    component: AssetsView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
