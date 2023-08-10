<style scoped src="./ScenicSpotView.css"></style>
<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { useNumberOfAttractionsChartStore } from './Charts/NumberOfAttractions'
import { useNumberOfPlacesAccommodationChartStore } from './Charts/NumberOfPlacesAccommodation'
import { useCongestionIndexRankingChartStore } from './Charts/CongestionIndexRanking'
import { useScenicTrafficChartStore } from './Charts/ScenicTraffic'

const numberOfAttractionsChartLoadingState = ref(true)
const numberOfAttractionsChartState = useNumberOfAttractionsChartStore()

const numberOfPlacesAccommodationChartLoadingState = ref(true)
const numberOfPlacesAccommodationChartState = useNumberOfPlacesAccommodationChartStore()

const congestionIndexRankingChartLoadingState = ref(true)
const congestionIndexRankingChartState = useCongestionIndexRankingChartStore()

const scenicTrafficChartLoadingState = ref(true)
const scenicTrafficChartState = useScenicTrafficChartStore()

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
      }),

    congestionIndexRankingChartState
      .loadData()
      .then(() => {
        congestionIndexRankingChartState.setDomID('left-up-right-content')
      })
      .then(() => {
        congestionIndexRankingChartLoadingState.value = false
      })
      .then(() => {
        congestionIndexRankingChartState.loadDom()
      }),

    scenicTrafficChartState
      .loadData()
      .then(() => {
        scenicTrafficChartState.setDomID('left-down-content')
      })
      .then(() => {
        scenicTrafficChartLoadingState.value = false
      })
      .then(() => {
        scenicTrafficChartState.loadDom()
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
            v-loading="congestionIndexRankingChartLoadingState"
            element-loading-background="rgba(0, 0, 0, 0)"
          ></div>
        </div>
      </div>

      <div class="left-middle">
        <div id="left-middle-content" class="content">
          <el-carousel trigger="click" class="pic-box">
            <el-carousel-item>
              <img src="@/assets/PeopleLivelihood/CulturalTourism/baishishan.png" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="@/assets/PeopleLivelihood/CulturalTourism/baishishan2.png" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="@/assets/PeopleLivelihood/CulturalTourism/yesanpo.png" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <div class="left-down">
        <div class="title">
          <div class="img"></div>
          <div class="text">各景区客流数</div>
        </div>
        <div
          id="left-down-content"
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
          <div class="text">特色美食推荐</div>
        </div>
        <div id="right-down-content" class="content">
          <el-carousel trigger="click" class="pic-box">
            <el-carousel-item>
              <img src="@/assets/PeopleLivelihood/CulturalTourism/huoshao.png" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="@/assets/PeopleLivelihood/CulturalTourism/baiyunzhang.png" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="@/assets/PeopleLivelihood/CulturalTourism/zhaobing.png" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
