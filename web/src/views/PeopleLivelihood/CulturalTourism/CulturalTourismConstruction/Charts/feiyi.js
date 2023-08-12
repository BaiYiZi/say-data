import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const usefeiyiChartStore = defineStore('feiyiChart', () => {
  const feiyiChartData = ref([])
  const domID = ref(undefined)
  const feiyiName = ref([])

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    feiyiName.value = ((await API.PEOPLE_LIVELIHOOD.feiyi()).data.data).map(v => {
      return {
        value: v.category
      }
    });
    feiyiChartData.value = ((await API.PEOPLE_LIVELIHOOD.feiyi()).data.data).map(v => {
      return {
        value: v.count
      }
    });
  }

  async function loadData() {
    await getCurrentData()

    watch(feiyiChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const feiyiChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const feiyiChartOption = {
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
        top: 40,
        left: '3%',
        right: '4%',
        bottom: 40,
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
          data: feiyiName.value,
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
          name: '数量',
          type: 'bar',
          barWidth: 30,
          data: feiyiChartData.value,
          label: {
            show: true, //开启显示
            position: 'top', //在上方显示
            //数值样式
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: 12
          },
          itemStyle: {
            borderRadius: [3, 3, 0, 0],
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(0, 204, 255, 1)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(9, 97, 173, 1)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }
        }
      ]
    }

    feiyiChart.setOption(feiyiChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const feiyiChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    feiyiChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})