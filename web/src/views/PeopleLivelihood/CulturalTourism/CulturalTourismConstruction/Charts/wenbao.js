import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const usewenbaoChartStore = defineStore('wenbaoChart', () => {
  const wenbaoChartData = ref([])
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    wenbaoChartData.value = ((await API.PEOPLE_LIVELIHOOD.wenbao()).data.data).map(v => {
      return {
        name: v.type,
        value: v.count
      }
    });
  }

  async function loadData() {
    await getCurrentData()

    watch(wenbaoChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const wenbaoChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const wenbaoChartOption = {
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
          data: wenbaoChartData.value,
        }
      ]
    }

    wenbaoChart.setOption(wenbaoChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const wenbaoChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    wenbaoChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})