<style scoped src="./HomeView.css"></style>

<script setup>
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const router = useRouter()
const appearanceAnimation = ref(false)

function undeveloped() {
  ElMessage({
    message: '别点我啦! 正努力开发中呢~',
    type: 'warning'
  })
}

function goHome() {
  router.go(0)
}

function goPeopleLivelihood() {
  router.push('/people-livelihood')
}

onMounted(() => {
  appearanceAnimation.value = !appearanceAnimation.value
})
</script>

<template>
  <div class="container">
    <transition name="el-zoom-in-top">
      <div class="header" v-show="appearanceAnimation">
        <div @click="goHome">数说保定</div>
      </div>
    </transition>

    <div class="content">
      <div class="content-item">
        <transition name="el-zoom-in-center">
          <div class="cnt-box economy" @click="undeveloped" v-show="appearanceAnimation">
            <div>经济</div>
          </div>
        </transition>

        <transition name="el-zoom-in-center">
          <div
            class="cnt-box people-livelihood"
            @click="goPeopleLivelihood"
            v-show="appearanceAnimation"
          >
            <div>民生</div>
          </div>
        </transition>

        <transition name="el-zoom-in-center">
          <div class="cnt-box agriculture" @click="undeveloped" v-show="appearanceAnimation">
            <div>农业</div>
          </div>
        </transition>

        <transition name="el-zoom-in-center">
          <div class="cnt-box double-carbon" @click="undeveloped" v-show="appearanceAnimation">
            <div>双碳</div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
