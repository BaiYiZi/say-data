import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('@/views/error/NotFound/NotFoundView.vue'),
    },
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
          children: [
            {
              path: "scenic-spot",
              name: "scenic-spot",
              component: () => import('../views/Peoplelivelihood/CulturalTourism/ScenicSpot/ScenicSpotView.vue'),
            },
            {
              path: "cultural-tourism-construction",
              name: "cultural-tourism-construction",
              component: () => import('../views/Peoplelivelihood/CulturalTourism/CulturalTourismConstruction/CulturalTourismConstructionView.vue'),
            },
            {
              path: "mechanism",
              name: "mechanism",
              component: () => import('../views/Peoplelivelihood/CulturalTourism/Mechanism/MechanismView.vue'),
            },
            {
              path: "cultural-heritage",
              name: "cultural-heritage",
              component: () => import('../views/Peoplelivelihood/CulturalTourism/CulturalHeritage/CulturalHeritageView.vue'),
            }
          ],
          redirect: "/people-livelihood/cultural-tourism/scenic-spot"
        }
      ],
    }
  ]
})

export default router
