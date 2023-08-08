import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const useScenicSpotTestChartStore = defineStore('ScenicSpotTestChart', () => {
  const testChartData = ref({ category: [], value: [] })
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function loadData() {
    testChartData.value = (await API.PEOPLE_LIVELIHOOD.test()).data.data
    watch(testChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const testChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const testChartOption = {
      xAxis: {
        type: 'category',
        data: testChartData.value.category
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: testChartData.value.value,
          type: 'bar',
          showBackground: true
        }
      ]
    }
    testChart.on('click', function (params) {
      console.log(params)
    });

    testChart.setOption(testChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const testChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    testChart.dispose()
    testChartData.value = (await API.PEOPLE_LIVELIHOOD.test()).data.data
  }

  return { setDomID, loadDom, loadData, reLoadData }
})