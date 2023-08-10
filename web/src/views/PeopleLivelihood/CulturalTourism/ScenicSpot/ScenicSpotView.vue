<style scoped src="./ScenicSpotView.css"></style>
<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { useNumberOfAttractionsChartStore } from './Charts/NumberOfAttractions'
import { useNumberOfPlacesAccommodationChartStore } from './Charts/NumberOfPlacesAccommodation'

const numberOfAttractionsChartLoadingState = ref(true)
const numberOfAttractionsChartState = useNumberOfAttractionsChartStore()

const numberOfPlacesAccommodationChartLoadingState = ref(true)
const numberOfPlacesAccommodationChartState = useNumberOfPlacesAccommodationChartStore()

onMounted(() => {
  Promise.all([
    numberOfAttractionsChartState
      .loadData()
      .then(() => {
        numberOfAttractionsChartState.setDomID('left-up-left-content')
      })
      .then(() => {
        numberOfAttractionsChartLoadingState.value = false
      })
      .then(() => {
        numberOfAttractionsChartState.loadDom()
      })
      .then(() => {
        // return async () => {
        //   while (true) {
        //     await new Promise((resolve) => {
        //       setTimeout(() => {
        //         resolve()
        //       }, 2000)
        //     })
        //     numberOfAttractionsChartLoadingState.value = true
        //     await numberOfAttractionsChartState.reLoadData()
        //     numberOfAttractionsChartLoadingState.value = false
        //   }
        // }
      }),

    numberOfPlacesAccommodationChartState
      .loadData()
      .then(() => {
        numberOfPlacesAccommodationChartState.setDomID('left-up-middle-content')
      })
      .then(() => {
        numberOfPlacesAccommodationChartLoadingState.value = false
      })
      .then(() => {
        numberOfPlacesAccommodationChartState.loadDom()
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
        <div class="left-up-left">
          <div class="title">
            <div class="img"></div>
            <div class="text">各类型景区数量占比</div>
          </div>
          <div
            id="left-up-left-content"
            class="content"
            v-loading="numberOfAttractionsChartLoadingState"
            element-loading-background="rgba(0, 0, 0, 0)"
          ></div>
        </div>

        <div class="left-up-middle">
          <div class="title">
            <div class="img"></div>
            <div class="text">住宿场所各地数量占比</div>
          </div>
          <div
            id="left-up-middle-content"
            class="content"
            v-loading="numberOfAttractionsChartLoadingState"
            element-loading-background="rgba(0, 0, 0, 0)"
          ></div>
        </div>

        <div class="left-up-right">
          <div class="title">
            <div class="img"></div>
            <div class="text">各景区拥堵指数排行</div>
          </div>
          <div
            id="left-up-right-content"
            class="content"
            v-loading="true"
            element-loading-background="rgba(0, 0, 0, 0)"
          ></div>
        </div>
      </div>

      <div class="left-middle">
        <div
          id="left-middle-content"
          class="content"
          v-loading="true"
          element-loading-background="rgba(0, 0, 0, 0)"
        ></div>
      </div>

      <div class="left-down">
        <div class="title">
          <div class="img"></div>
          <div class="text">各景区客流数</div>
        </div>
        <div
          id="left-up-right-content"
          class="content"
          v-loading="true"
          element-loading-background="rgba(0, 0, 0, 0)"
        ></div>
      </div>
    </div>

    <div class="right">
      <div class="right-up">
        <div class="title">
          <div class="img"></div>
          <div class="text">著名红色景区推荐</div>
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
          <div class="text">著名红色景区推荐</div>
        </div>
        <div
          id="right-down-content"
          class="content"
          v-loading="true"
          element-loading-background="rgba(0, 0, 0, 0)"
        ></div>
      </div>
    </div>
  </div>
</template>
