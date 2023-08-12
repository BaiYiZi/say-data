<style scoped src="./CulturalTourismView.css"></style>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()
const currentCircleShowID = ref(1)

function goHome() {
  router.push('/')
}

function goScenicSpot() {
  router.push('/people-livelihood/cultural-tourism/scenic-spot')
  currentCircleShowID.value = 1
}

function goCulturalTourismConstruction() {
  router.push('/people-livelihood/cultural-tourism/cultural-tourism-construction')
  currentCircleShowID.value = 2
}

function goMechanism() {
  router.push('/people-livelihood/cultural-tourism/mechanism')
  currentCircleShowID.value = 3
}

function goCulturalHeritage() {
  router.push('/people-livelihood/cultural-tourism/cultural-heritage')
  currentCircleShowID.value = 4
}

onMounted(() => {
  const route = useRoute()
  switch (route.path) {
    case '/people-livelihood/cultural-tourism/scenic-spot':
      currentCircleShowID.value = 1
      break
    case '/people-livelihood/cultural-tourism/cultural-tourism-construction':
      currentCircleShowID.value = 2
      break
    case '/people-livelihood/cultural-tourism/mechanism':
      currentCircleShowID.value = 3
      break
    case '/people-livelihood/cultural-tourism/cultural-heritage':
      currentCircleShowID.value = 4
      break
  }
})
</script>

<template>
  <div class="container">
    <div class="header">
      <div @click="goHome">数说保定</div>
    </div>

    <div class="content">
      <div class="menu-bar">
        <div class="menu-bar-title">
          <div class="message">
            <span class="breathe">文</span>
            <span class="breathe">化</span>
            <span class="breathe">旅</span>
            <span class="breathe">游</span>
          </div>
        </div>

        <div class="menu-bar-list">
          <div class="box">
            <span class="little-circle"><span v-show="currentCircleShowID == 1"></span></span>
            <span class="scenic-spot-img"></span>
            <div v-show="false" @click="goScenicSpot">景区及公共娱乐设施</div>
            <div @click="goScenicSpot">景区及特色推荐</div>
          </div>
          <div class="box">
            <span class="little-circle"><span v-show="currentCircleShowID == 2"></span></span>
            <span class="cultural-construction-img"></span>
            <div v-show="false" @click="goCulturalTourismConstruction">文化旅游业发展情况</div>
            <div @click="goCulturalTourismConstruction">历史底蕴及发展</div>
          </div>
          <div class="box">
            <span class="little-circle"><span v-show="currentCircleShowID == 3"></span></span>
            <span class="mechanism-img"></span>
            <div v-show="false" @click="goMechanism">文化机构及文旅相关设施</div>
            <div @click="goMechanism">旅游相关单位</div>
          </div>
          <div class="box">
            <span class="little-circle"><span v-show="currentCircleShowID == 4"></span></span>
            <span class="cultural-heritage-img"></span>
            <div v-show="false" @click="goCulturalHeritage">文化遗产及文化相关</div>
            <div @click="goCulturalHeritage">居民周边游玩</div>
          </div>
        </div>
      </div>
      <div class="page">
        <RouterView />
      </div>
    </div>
  </div>
</template>
