<style scoped src="./MechanismView.css"></style>
<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { useHotelDensityChartStore } from './Charts/HotelDensity'
import { useDomesticTouristsChartStore } from './Charts/DomesticTourists'
import { useInternationalVisitorsChartStore } from './Charts/InternationalVisitors'
import { useProgramChartStore } from './Charts/Program'
import { useHotelQuantityChartStore } from './Charts/HotelQuantity'

const hotelDensityChartLoadingState = ref(true)
const hotelDensityChartState = useHotelDensityChartStore()

const hotelQuantityChartLoadingState = ref(true)
const hotelQuantityChartState = useHotelQuantityChartStore()

const domesticTouristsChartLoadingState = ref(true)
const domesticTouristsChartState = useDomesticTouristsChartStore()

const internationalVisitorsLoadingState = ref(true)
const internationalVisitorsChartState = useInternationalVisitorsChartStore()

const programChartLoadingState = ref(true)
const programChartState = useProgramChartStore()

onMounted(() => {
  Promise.all([
    hotelDensityChartState
      .loadData()
      .then(() => {
        hotelDensityChartState.setDomID('left-up-content')
      })
      .then(() => {
        hotelDensityChartLoadingState.value = false
      })
      .then(() => {
        hotelDensityChartState.loadDom()
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

    hotelQuantityChartState
      .loadData()
      .then(() => {
        hotelQuantityChartState.setDomID('right-up-content')
      })
      .then(() => {
        hotelQuantityChartLoadingState.value = false
      })
      .then(() => {
        hotelQuantityChartState.loadDom()
      })
      .then(() => {
      }),

    domesticTouristsChartState
      .loadData()
      .then(() => {
        domesticTouristsChartState.setDomID('left-down-right-content')
      })
      .then(() => {
        domesticTouristsChartLoadingState.value = false
      })
      .then(() => {
        domesticTouristsChartState.loadDom()
      })
      .then(() => {
      }),

    internationalVisitorsChartState
      .loadData()
      .then(() => {
        internationalVisitorsChartState.setDomID('left-down-left-content')
      })
      .then(() => {
        internationalVisitorsLoadingState.value = false
      })
      .then(() => {
        internationalVisitorsChartState.loadDom()
      })
      .then(() => {
      }),

    programChartState
      .loadData()
      .then(() => {
        programChartState.setDomID('right-down-content')
      })
      .then(() => {
        programChartLoadingState.value = false
      })
      .then(() => {
        programChartState.loadDom()
      })
      .then(() => {
      }),

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
          <div class="text">饭店分布密度</div>
        </div>
        <div id="left-up-content" class="content" v-loading="true" element-loading-background="rgba(0, 0, 0, 0)"></div>
      </div>

      <div class="left-down">
        <div class="left-down-left">
          <div class="title">
            <div class="img"></div>
            <div class="text">国外游客数量及收入</div>
          </div>
          <div id="left-down-left-content" class="content" v-loading="true" element-loading-background="rgba(0, 0, 0, 0)">
          </div>
        </div>

        <div class="left-down-right">
          <div class="title">
            <div class="img"></div>
            <div class="text">国内游客数量及收入</div>
          </div>
          <div id="left-down-right-content" class="content" v-loading="true"
            element-loading-background="rgba(0, 0, 0, 0)"></div>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="right-up">
        <div class="title">
          <div class="img"></div>
          <div class="text">饭店客房数量</div>
        </div>
        <div id="right-up-content" class="content" v-loading="true" element-loading-background="rgba(0, 0, 0, 0)"></div>
      </div>

      <div class="right-down">
        <div class="title">
          <div class="img"></div>
          <div class="text">广播电视节目综合人口覆盖率</div>
        </div>
        <div id="right-down-content" class="content" v-loading="true" element-loading-background="rgba(0, 0, 0, 0)"></div>
      </div>
    </div>
  </div>
</template>
