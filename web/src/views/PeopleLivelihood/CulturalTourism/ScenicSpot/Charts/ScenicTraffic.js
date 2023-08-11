import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const useScenicTrafficChartStore = defineStore('ScenicTrafficChart', () => {
  const scenicTrafficChartData = ref([])
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    const category = []
    const value = []

    scenicTrafficChartData.value = ((await API.PEOPLE_LIVELIHOOD.ScenicTrafficData()).data.data).map(v => {
      category.unshift(v.name)
      value.unshift(v.footfallIndex)
    })

    scenicTrafficChartData.value.category = category
    scenicTrafficChartData.value.value = value
  }

  async function loadData() {
    await getCurrentData()

    watch(scenicTrafficChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const scenicTrafficChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const scenicTrafficChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          formatter: function (value) {
            return value.split("").join("\n");
          }
        },
        axisTick: {
          alignWithLabel: true
        },
        data: scenicTrafficChartData.value.category
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          itemStyle: {
            barBorderRadius: [10, 10, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(33, 196, 255, 1)'
              },
              {
                offset: 1,
                color: 'rgba(28, 146, 189, 1)'
              }
            ])
          },
          data: scenicTrafficChartData.value.value,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    };

    scenicTrafficChart.setOption(scenicTrafficChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const scenicTrafficChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    scenicTrafficChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})