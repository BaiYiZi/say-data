import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const useNumberOfPlacesAccommodationChartStore = defineStore('NumberOfPlacesAccommodationChart', () => {
  const numberOfPlacesAccommodationChartData = ref([])
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    numberOfPlacesAccommodationChartData.value = ((await API.PEOPLE_LIVELIHOOD.NumberOfPlacesAccommodationData()).data.data).map(v => {
      return {
        name: v.adname,
        value: v.count
      }
    });
  }

  async function loadData() {
    await getCurrentData()

    watch(numberOfPlacesAccommodationChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const numberOfPlacesAccommodationChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const numberOfAttractionsChartOption = {
      // color: [
      //   "red",
      //   "aqua",
      //   "#fac858",
      //   "#ee6666",
      //   "#73c0de",
      //   "#3ba272",
      //   "#fc8452",
      //   "#9a60b4",
      //   "#ea7ccc"
      // ],
      series: [
        {
          type: "pie",
          radius: "56%",
          center: [
            "50%",
            "50%"
          ],
          label: {
            show: true,
            color: "#ffffff",
            fontSize: 16,
            position: "outside"
          },
          data: numberOfPlacesAccommodationChartData.value,
        }
      ]
    }

    numberOfPlacesAccommodationChart.setOption(numberOfAttractionsChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const numberOfPlacesAccommodationChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    numberOfPlacesAccommodationChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})