import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const usehuodongChartStore = defineStore('huodongChart', () => {
  const huodongChartData = ref([])
  const domID = ref(undefined)
  const huodongName = ref([])

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    huodongName.value = ((await API.PEOPLE_LIVELIHOOD.huodong()).data.data).map(v => {
      var d = new Date(v.dates)
      v.dates = d.getFullYear() + '年' + d.getMonth() + '月'
      return {
        value: v.dates
      }
    });
    huodongChartData.value = ((await API.PEOPLE_LIVELIHOOD.huodong()).data.data).map(v => {
      return {
        value: v.count
      }
    });
  }

  async function loadData() {
    await getCurrentData()

    watch(huodongChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const huodongChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const huodongChartOption = {
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
            interval: 0,
            formatter: function (value) {
              return value.split("").join("\n");
            }
          },
          type: 'category',
          data: huodongName.value,
          axisTick: {
            alignWithLabel: true
          },
        }
      ],
      yAxis: [
        {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.15)'
            }
          }
        }
      ],
      series: [
        {
          name: '次数',
          smooth: true,
          type: 'line',
          data: huodongChartData.value,
          color: '#54EBC8',
          lineStyle: {
            width: 4
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(84, 235, 200, 0.5)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(84, 235, 200, 0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
        }
      ],
    }

    huodongChart.setOption(huodongChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const huodongChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    huodongChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})