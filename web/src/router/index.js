import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/people-livelihood',
      name: 'people-livelihood',
      component: () => import('../views/Peoplelivelihood/Entrance/EntranceView.vue'),
      children: [
        {
          path: "",
          name: "people-livelihood-home",
          component: () => import('../views/Peoplelivelihood/PeopleLivelihoodHome/PeoplelivelihoodHomeView.vue'),
        },
        {
          path: "cultural-tourism",
          name: "cultural-tourism",
          component: () => import('../views/Peoplelivelihood/CulturalTourism/CulturalTourismView.vue'),
        }
      ],
    }
  ]
})

export default router
