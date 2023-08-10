import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const usebowuguanChartStore = defineStore('bowuguanChart', () => {
  const bowuguanChartData = ref([])
  const domID = ref(undefined)
  const bowuguanName = ref([])

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    bowuguanName.value = ((await API.PEOPLE_LIVELIHOOD.bowuguan()).data.data).map(v => {
      return {
        value: v.address
      }
    });
    bowuguanChartData.value = ((await API.PEOPLE_LIVELIHOOD.bowuguan()).data.data).map(v => {
      return {
        name: v.address,
        value: v.count
      }
    });
  }

  async function loadData() {
    await getCurrentData()

    watch(bowuguanChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const bowuguanChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const bowuguanChartOption = {
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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          axisLabel: {  
            interval:0,
            formatter:function(value)  
            {  
                return value.split("").join("\n");  
            }
        },
          type: 'category',
          data: bowuguanName.value,
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '数量',
          type: 'bar',
          barWidth: '60%',
          data: bowuguanChartData.value
        }
      ]
    }

    bowuguanChart.setOption(bowuguanChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const bowuguanChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    bowuguanChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})