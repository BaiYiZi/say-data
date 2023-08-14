<style scoped src="./CulturalTourismConstructionView.css"></style>
<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { usewenbaoChartStore } from './Charts/wenbao'
import { usebowuguanChartStore } from './Charts/bowuguan'
import { usefeiyiChartStore } from './Charts/feiyi'
import { useMuseumVisitorsChartStore } from './Charts/MuseumVisitors'
import { useRedRuinsChartStore } from './Charts/RedRuins'

const wenbaoChartLoadingState = ref(true)
const wenbaoChartState = usewenbaoChartStore()

const bowuguanChartLoadingState = ref(true)
const bowuguanChartState = usebowuguanChartStore()

const feiyiChartLoadingState = ref(true)
const feiyiChartState = usefeiyiChartStore()

const museumVisitorsChartLoadingState = ref(true)
const museumVisitorsChartState = useMuseumVisitorsChartStore()

const redRuinsChartLoadingState = ref(true)
const redRuinsChartState = useRedRuinsChartStore()

onMounted(() => {
  Promise.all([
    wenbaoChartState
      .loadData()
      .then(() => {
        wenbaoChartState.setDomID('left-down-left-content')
      })
      .then(() => {
        wenbaoChartLoadingState.value = false
      })
      .then(() => {
        wenbaoChartState.loadDom()
      }),

    bowuguanChartState
      .loadData()
      .then(() => {
        bowuguanChartState.setDomID('left-down-right-content')
      })
      .then(() => {
        bowuguanChartLoadingState.value = false
      })
      .then(() => {
        bowuguanChartState.loadDom()
      }),

    feiyiChartState
      .loadData()
      .then(() => {
        feiyiChartState.setDomID('left-up-content')
      })
      .then(() => {
        feiyiChartLoadingState.value = false
      })
      .then(() => {
        feiyiChartState.loadDom()
      }),

    museumVisitorsChartState
      .loadData()
      .then(() => {
        museumVisitorsChartState.setDomID('right-up-content')
      })
      .then(() => {
        museumVisitorsChartLoadingState.value = false
      })
      .then(() => {
        museumVisitorsChartState.loadDom()
      }),

    redRuinsChartState
      .loadData()
      .then(() => {
        redRuinsChartState.setDomID('right-down-content')
      })
      .then(() => {
        redRuinsChartLoadingState.value = false
      })
      .then(() => {
        redRuinsChartState.loadDom()
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
          <div class="text">非物质文化遗产数量</div>
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
            <div class="text">各类型文化保护单位数量</div>
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
            <div class="text">各地区博物馆数量</div>
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
          <div class="text">各博物馆年参观人次</div>
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
          <div class="text">红色遗址</div>
        </div>
        <div
          id="right-down-content"
          class="content"
          v-loading="redRuinsChartLoadingState"
          element-loading-background="rgba(0, 0, 0, 0)"
        >
          <div v-show="!redRuinsChartLoadingState"><span></span></div>
          <div v-show="!redRuinsChartLoadingState"><span></span></div>
          <div v-show="!redRuinsChartLoadingState"><span></span></div>
          <div v-show="!redRuinsChartLoadingState"><span></span></div>
        </div>
      </div>
    </div>
  </div>
</template>
