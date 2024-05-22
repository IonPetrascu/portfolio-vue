import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import TechStack from '@/views/TechStack.vue'
import ProjectsComponent from '@/components/ProjectsComponent.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/techStack',
      name: 'techstack',
      component: TechStack
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsComponent
    }

  ]
})

export default router
