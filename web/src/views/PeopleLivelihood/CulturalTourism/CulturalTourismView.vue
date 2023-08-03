<style scoped src="./CulturalTourismView.css"></style>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}

function goScenicSpot() {
  router.push('/people-livelihood/cultural-tourism/scenic-spot')
}

function goCulturalTourismConstruction() {
  router.push('/people-livelihood/cultural-tourism/cultural-tourism-construction')
}

function goMechanism() {
  router.push('/people-livelihood/cultural-tourism/mechanism')
}

function goCulturalHeritage() {
  router.push('/people-livelihood/cultural-tourism/cultural-heritage')
}
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
            <span class="scenic-spot-img"></span>
            <div @click="goScenicSpot">景区及公共娱乐设施</div>
          </div>
          <div class="box">
            <span class="cultural-construction"></span>
            <div @click="goCulturalTourismConstruction">文化旅游业发展情况</div>
          </div>
          <div class="box">
            <span class="mechanism"></span>
            <div @click="goMechanism">文化机构及文旅相关设施</div>
          </div>
          <div class="box">
            <span class="cultural-heritage"></span>
            <div @click="goCulturalHeritage">文化遗产及文化相关</div>
          </div>
        </div>
      </div>
      <div class="page">
        <RouterView />
      </div>
    </div>
  </div>
</template>
