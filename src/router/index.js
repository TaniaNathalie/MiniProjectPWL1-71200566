import { createRouter, createWebHistory } from 'vue-router'
import MakananView from '../views/MakananView.vue'
import MinumanView from '../views/MinumanView.vue'
import SnackView from '../views/SnackView.vue'

const routes = [
  {
    path: '/',
    name: 'Makanan',
    component: MakananView
  },
  {
    path: '/minuman',
    name: 'Minuman',
    component: MinumanView
  },
  {
    path: '/snack',
    name: 'snack',
    component: SnackView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
