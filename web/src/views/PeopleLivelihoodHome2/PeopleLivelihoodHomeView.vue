<style scoped src="./PeopleLivelihoodHomeView.css"></style>

<script setup>
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()

const frameAppearanceAnimation = ref(false)
const boxAppearanceAnimation = ref(false)

function undeveloped() {
  ElMessage({
    message: '别点我啦! 正努力开发中呢~',
    type: 'warning'
  })
}

function goCulturalTourism() {
  router.push({ name: "cultural-tourism" })
}

function goHome() {
  router.push('/')
}

onMounted(() => {
  frameAppearanceAnimation.value = !frameAppearanceAnimation.value

  {
    ; (() => {
      return new Promise((resolve) => setTimeout(resolve, 200))
    })().then(() => {
      boxAppearanceAnimation.value = !boxAppearanceAnimation.value
    })
  }
})
</script>

<template>
  <div class="container">
    <div class="header">
      <div @click="goHome">数说保定</div>
    </div>
    <!-- <button @click="goHome" style="float: right;">go home</button> -->

    <div class="content">
      <div class="cnt-colum-left">
        <transition name="el-zoom-in-center">
          <div class="cnt-colum-left-up content-box-opacity-radius" v-show="frameAppearanceAnimation"
            @click="undeveloped"></div>
        </transition>

        <transition name="el-zoom-in-center">
          <div class="cnt-colum-left-down content-box-opacity-radius" v-show="frameAppearanceAnimation"
            @click="undeveloped"></div>
        </transition>
      </div>

      <div class="cnt-colum-middle">
        <transition name="el-zoom-in-center">
          <div class="cnt-colum-middle-up content-box-opacity-radius" v-show="frameAppearanceAnimation">
            <div class="cnt-colum-middle-up-left">
              <transition name="el-fade-in-linear" v-show="boxAppearanceAnimation">
                <div class="cnt-colum-middle-up-left-up box-public" @click="undeveloped">
                  <div>城乡发展</div>
                </div>
              </transition>

              <div class="cnt-colum-middle-up-left-middle">
                <transition name="el-fade-in-linear" v-show="boxAppearanceAnimation">
                  <div class="cnt-colum-middle-up-left-middle-left box-public" @click="undeveloped">
                    <div>医疗资源</div>
                  </div>
                </transition>

                <transition name="el-fade-in-linear" v-show="boxAppearanceAnimation">
                  <div class="cnt-colum-middle-up-left-middle-right box-public" @click="undeveloped">
                    <div>社会保障</div>
                  </div>
                </transition>
              </div>

              <transition name="el-fade-in-linear" v-show="boxAppearanceAnimation">
                <div class="cnt-colum-middle-up-left-down box-public" @click="undeveloped">
                  <div>就业发展</div>
                </div>
              </transition>
            </div>

            <div class="cnt-colum-middle-up-middle">
              <transition name="el-fade-in-linear" v-show="boxAppearanceAnimation">
                <div class="cnt-colum-middle-up-middle-up box-public" @click="undeveloped">
                  <div>养老服务</div>
                </div>
              </transition>

              <transition name="el-fade-in-linear" v-show="boxAppearanceAnimation">
                <div class="cnt-colum-middle-up-middle-down box-public" @click="undeveloped">
                  <div>教育信息</div>
                </div>
              </transition>
            </div>

            <transition name="el-fade-in-linear" v-show="boxAppearanceAnimation">
              <div class="cnt-colum-middle-up-right box-public" @click="goCulturalTourism">
                <div>文化旅游</div>
              </div>
            </transition>
          </div>
        </transition>

        <transition name="el-zoom-in-center">
          <div class="cnt-colum-middle-down content-box-opacity-radius" v-show="frameAppearanceAnimation"></div>
        </transition>
      </div>

      <div class="cnt-colum-right">
        <transition name="el-zoom-in-center">
          <div class="cnt-colum-right-up content-box-opacity-radius" v-show="frameAppearanceAnimation"></div>
        </transition>
        <transition name="el-zoom-in-center">
          <div class="cnt-colum-right-down content-box-opacity-radius" v-show="frameAppearanceAnimation"></div>
        </transition>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
