<template>
    <div class="Table">
        <table>
            <th v-for="item in header" :key="item">{{ item }}</th>
            <tr v-for="item in chartData" :key="item">
                <td v-for="key in item" :key="key" @click="openDillDownChart(key)">{{ key }}</td>
            </tr>
        </table>
    </div>
    <dialogFrame title="test" ref="dialog">
        <frame :title="museumName">
            <MuseumInfo :museumName="museumName"/>
        </frame>
    </dialogFrame>
</template>

<script setup>
import { ref, onMounted } from "vue"

import '@/assets/table.less'
import { getMuseumList } from '@/api/DevelopmentData'
import dialogFrame from '@/components/dialogFrame.vue'
import frame from "@/components/Frame.vue"

import MuseumInfo from "./MuseumInfo.vue"

const props = defineProps(["address"])

const header = ref()
const chartData = ref()

const dialog = ref(null)
//给子组件传递的参数
const museumName = ref()

// 获取 API 接口数据
async function getChartData() {
    chartData.value = (await getMuseumList(props.address)).data.data
}

// 打开下钻页面
function openDillDownChart(key) {
    museumName.value = key
    dialog.value.open()
}

onMounted(() => {
    getChartData().then(() => {
        header.value = ['博物馆名称']
    })
})
</script>

<style lang="less" scoped>


</style>