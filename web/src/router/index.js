import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home/HomeView.vue'
import PeopleLivelihoodHome from '@/views/PeopleLivelihood/PeopleLivelihoodHome/PeopleLivelihoodHomeView.vue'
import CulturalTourism from '@/views/PeopleLivelihood/CultureTourism/CulturalTourism.vue'
import TouristAttraction from '@/views/PeopleLivelihood/CultureTourism/TouristAttraction/TouristAttraction.vue'
import Culture from '@/views/PeopleLivelihood/CultureTourism/Culture/Culture.vue'
import Development from '@/views/PeopleLivelihood/CultureTourism/Development/Development.vue'
import Ecology from '@/views/PeopleLivelihood/CultureTourism/Ecology/Ecology.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    // 数说保定主页
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    // 民生主页
    {
      name: 'people-livelihood-home',
      path: '/people-livelihood',
      component: PeopleLivelihoodHome
    },
    //文化旅游页面
    // 默认为景区及周边页面
    {
      name: "cultural-tourism",
      path: "/people-livelihood/cultural-tourism",
      component: CulturalTourism,
      redirect: "/people-livelihood/cultural-tourism/tourist-attraction",
      children: [
        // 景区及周边页面
        {
          name: 'tourist-attraction',
          path: 'tourist-attraction',
          component: TouristAttraction
        },
        // 景区及周边页面
        {
          name: 'tourist-attraction',
          path: 'tourist-attraction',
          component: TouristAttraction
        },
        // 各类文化情况页面
        {
          name: 'cultrue',
          path: 'cultrue',
          component: Culture
        },
        // 文旅发展概况页面
        {
          name: 'development',
          path: 'development',
          component: Development
        },
        // 文旅周边生态页面
        {
          name: 'ecology',
          path: 'ecology',
          component: Ecology
        },
      ]
    },
  ]
})

export default router
