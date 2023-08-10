import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const usegongyuanChartStore = defineStore('gongyuanChart', () => {
  const gongyuanChartData = ref([])
  const domID = ref(undefined)
  const gongyuanName = ref([])

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    gongyuanName.value = ((await API.PEOPLE_LIVELIHOOD.gongyuan()).data.data).map(v => {
      return {
        value: v.tag_name
      }
    });
    gongyuanChartData.value = ((await API.PEOPLE_LIVELIHOOD.gongyuan()).data.data).map(v => {
      return {
        value: v.count
      }
    });
  }

  async function loadData() {
    await getCurrentData()

    watch(gongyuanChartData, () => {
      loadDom()
    }),
    watch(gongyuanName, () =>{
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const gongyuanChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const gongyuanChartOption = {
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
          data: gongyuanName.value,
          axisTick: {
            alignWithLabel: true
          },
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
          data: gongyuanChartData.value
        }
      ],
      
    }

    gongyuanChart.setOption(gongyuanChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const feiyiChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    gongyuanChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})