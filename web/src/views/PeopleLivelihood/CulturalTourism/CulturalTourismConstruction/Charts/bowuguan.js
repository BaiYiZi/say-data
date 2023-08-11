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
      legend: {
        type: 'plain',
        x: 'center',
        // y: 'bottom',
        bottom: 12,
        icon: 'roundRect', // 图例的图标样式
        textStyle: { //图例的文字样式
          color: '#fff',
        },
      },
      grid: {
        top: '10%',
        left: '6%',
        right: '6%',
        bottom: '14%',
        containLabel: true
      },
      xAxis: [
        {
          axisLabel: {
            interval: 0,
            formatter: function (value) {
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
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.15)'
            }
          }
        }
      ],
      series: [
        {
          name: '数量(个)',
          type: 'bar',
          barWidth: '60%',
          data: bowuguanChartData.value,
          itemStyle: {
            borderRadius: [3, 3, 3, 3],
            color: 'rgba(56, 215, 255, 1)'
          }
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