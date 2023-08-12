import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const useHotelQuantityChartStore = defineStore('HotelQuantity', () => {
  const hotelQuantityChartData = ref([])
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    hotelQuantityChartData.value = {
      hotel_name: [],
      quantity: [],
    };

    var i = 13;
    (await API.PEOPLE_LIVELIHOOD.HotelQuantityData()).data.data.map(v => {
      if (i <= 0) {
        return
      }
      hotelQuantityChartData.value.hotel_name.push(v.hotel_name)
      hotelQuantityChartData.value.quantity.push(v.quantity)
      i--
    })
  }

  async function loadData() {
    await getCurrentData()

    watch(hotelQuantityChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const hotelQuantityChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const hotelQuantityChartOption = {
      // title: {
      //   text: this.rightname + "",
      // },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        type: 'plain',
        x: 'center',
        // y: 'bottom',
        bottom: 15,
        icon: 'roundRect', // 图例的图标样式
        textStyle: { //图例的文字样式
          color: '#fff',
        },
      },
      //图表位置
      grid: {
        top: "4%",
        left: "10%",
        right: "14%",
        bottom: "8%",
        containLabel: true,
      },
      //X轴
      xAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        //不显示X轴刻度线和数字
        splitLine: { show: false },
        axisLabel: { show: false },
      },
      yAxis: {
        type: "category",
        data: hotelQuantityChartData.value.hotel_name,
        //升序
        inverse: true,
        splitLine: { show: false },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        //key和图间距
        offset: 10,
        //动画部分
        animationDuration: 300,
        animationDurationUpdate: 300,
        //key文字大小
        nameTextStyle: {
          fontSize: 5,
        },
      },
      series: [
        {
          //柱状图自动排序，排序自动让Y轴名字跟着数据动
          realtimeSort: true,
          name: "数量(个)",
          type: "bar",
          data: hotelQuantityChartData.value.quantity,
          barWidth: 14,
          barGap: 10,
          smooth: true,
          valueAnimation: true,
          showBackground: true,
          backgroundStyle: {
            borderRadius: [0, 100, 100, 0],
            color: 'rgba(255,255,255,0.05)',
          },
          //Y轴数字显示部分
          //Y轴数字显示部分
          label: {
            show: true,
            position: 'insideLeft',
            offset: [200, 0],
            valueAnimation: true,
            color: "rgba(255,255,255,1)",
            fontSize: 12,
          },
          itemStyle: {
            barBorderRadius: [0, 100, 100, 0],
            //阴影
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffsetX: 0,
            shadowOffsetY: 6,
            shadowBlur: 18,
            //颜色样式部分
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "rgba(15, 135, 250, 1)" },
              { offset: 1, color: "rgba(0, 192, 254, 1)" },
            ]),
          },
        },
      ],
      //动画部分
      animationDuration: 0,
      animationDurationUpdate: 3000,
      animationEasing: "linear",
      animationEasingUpdate: "linear",
    };

    hotelQuantityChart.setOption(hotelQuantityChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const hotelQuantityChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    hotelQuantityChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})