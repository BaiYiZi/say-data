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
    yundongChartData.value = ((await API.PEOPLE_LIVELIHOOD.yundong()).data.data) }

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
      // series: [
      //   {
      //     type: 'gauge',
      //     splitNumber: 20,
      //     itemStyle: {
      //       color: '#58D9F9',
      //       shadowColor: 'rgba(0,138,255,0.45)',
      //       shadowBlur: 10,
      //       shadowOffsetX: 2,
      //       shadowOffsetY: 2
      //     },
      //     progress: {
      //       show: true,
      //       roundCap: true,
      //       width: 18
      //     },
      //     pointer: {
      //       icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
      //       length: '75%',
      //       width: 16,
      //       offsetCenter: [0, '5%']
      //     },
      //     axisLine: {
      //       roundCap: true,
      //       lineStyle: {
      //         width: 18
      //       }
      //     },
      //     axisTick: {
      //       show: false
      //     },
      //     splitLine: {
      //       length: 15,
      //       lineStyle: {
      //         width: 2,
      //         color: '#888'
      //       }
      //     },
      //     axisLabel: {
      //       distance: 25,
      //       color: '#aaa',
      //       fontSize: 20
      //     },
      //     anchor: {
      //       show: true,
      //       showAbove: true,
      //       size: 25,
      //       itemStyle: {
      //         borderWidth: 10
      //       }
      //     },
      //     title: {
      //       show: false
      //     },
      //     detail: {
      //       valueAnimation: true,
      //       fontSize: 60,
      //       color: '#149',
      //       offsetCenter: [0, '70%']
      //     },
      //     data: [
      //       {
      //         value: yundongChartData.value
      //       }
      //     ]
      //   }
      // ]
      series: [
        {
          type: 'gauge',
          radius: '88%',
          min: 0,
          max: 100,
          splitNumber: 10,
          itemStyle: {
            color: '#58D9F9',
            shadowColor: 'rgba(0,138,255,0.45)',
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 2
          },
          progress: {
            show: true,
            roundCap: true,
            width: 18
          },
          pointer: {
            icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
            length: '75%',
            width: 16,
            offsetCenter: [0, '5%']
          },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 18
            }
          },
          axisTick: {
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: '#999'
            }
          },
          splitLine: {
            length: 10,
            lineStyle: {
              width: 3,
              color: '#999'
            }
          },
          axisLabel: {
            distance: 25,
            color: '#999',
            fontSize: 20
          },
          detail: {
            valueAnimation: true,
            fontSize: 40,
            fontWeight: 'bolder',
            color: 'rgb(255,255,255,0.75)',
            formatter: function (value) {
              return '{value|' + value.toFixed(0) + '}{unit|个}';
            },
            rich: {
              value: {
                fontSize: 50,
                fontWeight: 'bolder',
                color: 'rgb(255,255,255,0.75)',
              },
              unit: {
                fontSize: 30,
                color: 'rgb(255,255,255,0.5)',
                padding: [0, 0, -2.6, 10]
              }
            }
          },
          data: [
            {
              value: yundongChartData.value
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