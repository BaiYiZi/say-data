<template>
    <Table title="ttt" :headerLineList="header" :dataList="chartData"></Table>
</template>

<script setup>
import { ref, onMounted } from "vue"

import Table from "@/components/Table.vue"
import { getTourisAttractionByAddress } from '@/api/TouristAttractionData'

const props = defineProps(["address", "level"])

const header = ref()
const chartData = ref()

// 获取 API 接口数据
async function getChartData() {
    chartData.value = ((await getTourisAttractionByAddress(props.address, props.level)).data.data).map(item => {
        return {
            name: item.attractions_name,
            value: item.level
        }
    })
}

onMounted(() => {
    getChartData().then(() => {
        header.value = ['名称', '等级']
    })
})
</script>

<style lang="less" scoped></style>