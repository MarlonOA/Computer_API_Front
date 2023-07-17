import { createRouter, createWebHistory } from 'vue-router'
import Computer from '../components/CreateComputer.vue'
import Home from '../components/ListComputer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: Computer
    },
  ]
})

export default router
