import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const useProgramChartStore = defineStore('Program', () => {
  const programChartData = ref([])
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    programChartData.value = {
      year: [],
      program_coverage: [],
    };

    (await API.PEOPLE_LIVELIHOOD.ProgramData()).data.data.map(v => {
      programChartData.value.year.push(v.year)
      programChartData.value.program_coverage.push(v.program_coverage * 100)
    })
  }

  async function loadData() {
    await getCurrentData()

    watch(programChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const programChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    var formatter = '年份:{b}<br/>人口覆盖率: {c}%';


    const programChartOption = {
      tooltip: {
        show: true,
        trigger: 'axis',
        formatter: formatter //展示百分比
      },
      legend: {
        type: 'plain',
        x: 'center',
        y: 'bottom',
        data: [
          {
            name: '人口覆盖率',
            icon: 'circle', // 图例的图标样式
          },
        ],
        textStyle: { //图例的文字样式
          color: '#fff',
        },
      },
      xAxis: {
        type: 'category',
        data: programChartData.value.year.reverse()
      },
      yAxis: {
        type: 'value',
        min: 98,
        max: 100,
        axisLabel: {
          show: true,
          interval: 'auto',
          formatter: '{value} %'//纵坐标百分比
        }
      },
      series: [
        {
          type: 'line',
          name: '人口覆盖率',
          data: programChartData.value.program_coverage.reverse(),
          itemStyle: {
            color: '#54EBC8',
          },
          lineStyle: {
            width: 4
          }
        }
      ]
    }

    programChart.setOption(programChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const programChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    programChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})