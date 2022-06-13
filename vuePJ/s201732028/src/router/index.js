import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Exam1List from '../views/Exam1List.vue'
import Exam1View from '../views/Exam1View'
import Exam2List from '../views/Exam2List.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/exam1',
    name: 'exam1',
    component: Exam1List,
  },
  {
    path: '/book',
    name: 'book',
    component: Exam1View,
  },
  {
    path: '/exam2',
    name: 'exam2',
    component: Exam2List,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
