<style scoped src="./CulturalHeritageView.css"></style>
<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { usegongyuanChartStore } from './Charts/gongyuan'
import { useyundongChartStore } from './Charts/yundong'
import { usehuodongChartStore } from './Charts/huodong'
import { usechangsuoChartStore } from './Charts/changsuo'
import { useGreeningChartStore } from './Charts/Greening'

const gongyuanChartLoadingState = ref(true)
const gongyuanChartState = usegongyuanChartStore()

const yundongChartLoadingState = ref(true)
const yundongChartState = useyundongChartStore()

const huodongChartLoadingState = ref(true)
const huodongChartState = usehuodongChartStore()

const changsuoChartLoadingState = ref(true)
const changsuoChartState = usechangsuoChartStore()

const greeningChartLoadingState = ref(true)
const greeningChartState = useGreeningChartStore()

onMounted(() => {
  Promise.all([
    gongyuanChartState
      .loadData()
      .then(() => {
        gongyuanChartState.setDomID('left-down-left-content')
      })
      .then(() => {
        gongyuanChartLoadingState.value = false
      })
      .then(() => {
        gongyuanChartState.loadDom()
      }),
    yundongChartState
      .loadData()
      .then(() => {
        yundongChartState.setDomID('left-down-right-content')
      })
      .then(() => {
        yundongChartLoadingState.value = false
      })
      .then(() => {
        yundongChartState.loadDom()
      }),
    huodongChartState
      .loadData()
      .then(() => {
        huodongChartState.setDomID('left-up-content')
      })
      .then(() => {
        huodongChartLoadingState.value = false
      })
      .then(() => {
        huodongChartState.loadDom()
      }),
    changsuoChartState
      .loadData()
      .then(() => {
        changsuoChartState.setDomID('right-up-content')
      })
      .then(() => {
        changsuoChartLoadingState.value = false
      })
      .then(() => {
        changsuoChartState.loadDom()
      }),
    greeningChartState
      .loadData()
      .then(() => {
        greeningChartState.setDomID('right-down-content')
      })
      .then(() => {
        greeningChartLoadingState.value = false
      })
      .then(() => {
        greeningChartState.loadDom()
      })
  ]).then((reLoadDataFuncs) => {
    // reLoadDataFuncs.forEach((v) => v())
  })
})

onUnmounted(() => {
  console.log('back')
})
</script>

<template>
  <div class="page-container">
    <div class="left">
      <div class="left-up">
        <div class="title">
          <div class="img"></div>
          <div class="text">文旅月活动频率</div>
        </div>
        <div
          id="left-up-content"
          class="content"
          v-loading="true"
          element-loading-background="rgba(0, 0, 0, 0)"
        ></div>
      </div>

      <div class="left-down">
        <div class="left-down-left">
          <div class="title">
            <div class="img"></div>
            <div class="text">各类公园数量</div>
          </div>
          <div
            id="left-down-left-content"
            class="content"
            v-loading="true"
            element-loading-background="rgba(0, 0, 0, 0)"
          ></div>
        </div>

        <div class="left-down-right">
          <div class="title">
            <div class="img"></div>
            <div class="text">休闲运动场所数量</div>
          </div>
          <div
            id="left-down-right-content"
            class="content"
            v-loading="true"
            element-loading-background="rgba(0, 0, 0, 0)"
          ></div>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="right-up">
        <div class="title">
          <div class="img"></div>
          <div class="text">娱乐场所各类别数量</div>
        </div>
        <div
          id="right-up-content"
          class="content"
          v-loading="true"
          element-loading-background="rgba(0, 0, 0, 0)"
        ></div>
      </div>

      <div class="right-down">
        <div class="title">
          <div class="img"></div>
          <div class="text">绿地面积</div>
        </div>
        <div
          id="right-down-content"
          class="content"
          v-loading=greeningChartLoadingState
          element-loading-background="rgba(0, 0, 0, 0)"
        >
          <div v-show="!greeningChartLoadingState">
            <span class="name">市中心绿地面积</span>
            <span class="text">
              <span class="icon"></span>
              <span class="value"></span>
              <span class="unit">&nbsp亩</span>
            </span>
            <div class="empty"></div>
            <span class="name">人均绿地面积</span>
            <span class="text">
              <span class="icon"></span>
              <span class="value"></span>
              <span class="unit">&nbsp平方米</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
