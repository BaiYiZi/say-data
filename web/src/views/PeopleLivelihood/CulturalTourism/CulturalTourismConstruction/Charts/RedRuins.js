import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'

export const useRedRuinsChartStore = defineStore('RedRuinsDataChart', () => {
  const redRuinsChartData = ref([])
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    redRuinsChartData.value = ((await API.PEOPLE_LIVELIHOOD.RedRuinsData()).data.data).map(v => {
      return v.site
    });

    // redRuinsChartData.value.forEach(v => { console.log(v) })
  }

  async function loadData() {
    await getCurrentData()

    watch(redRuinsChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value)

    const childs = instanceID.children
    for (let i = 0; i < 4; i++) {
      childs.item(i).firstChild.innerHTML = redRuinsChartData.value[i] || "待推荐"
    }
  }

  async function reLoadData() {

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})