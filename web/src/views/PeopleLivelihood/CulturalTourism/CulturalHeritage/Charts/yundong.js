import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const useyundongChartStore = defineStore('yundongChart', () => {
  const yundongChartData = ref([])
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    yundongChartData.value = ((await API.PEOPLE_LIVELIHOOD.yundong()).data) }

  async function loadData() {
    await getCurrentData()

    watch(yundongChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const yundongChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const yundongChartOption = {
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
          type: 'gauge',
          progress: {
            show: true,
            width: 18
          },
          axisLine: {
            lineStyle: {
              width: 18
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 2,
              color: '#888'
            }
          },
          axisLabel: {
            distance: 25,
            color: '#aaa',
            fontSize: 20
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
              borderWidth: 10
            }
          },
          title: {
            show: false
          },
          detail: {
            valueAnimation: true,
            fontSize: 60,
            color: '#149',
            offsetCenter: [0, '70%']
          },
          data: [
            {
              value: 80
            }
          ]
        }
      ]
    }

    yundongChart.setOption(yundongChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const yundongChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    yundongChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})