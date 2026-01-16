import { createRouter, createWebHistory } from 'vue-router'
import Tailwind from '../components/tailwind.vue'
import Flex from '../components/flex.vue'
import Combine from '../components/combine.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Tailwind },
  { path: '/flex', component: Flex },
  { path: '/cbe', component: Combine },
  ],
})

export default router
