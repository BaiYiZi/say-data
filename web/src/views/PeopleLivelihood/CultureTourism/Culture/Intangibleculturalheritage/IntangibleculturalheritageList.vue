<template>
    <Table :headerLineList="header" :dataList="chartData"></Table>
</template>

<script setup>
import { ref, onMounted } from "vue"

import Table from "@/components/Table.vue"
import { getIntangibleculturalheritageMlByLevel } from '@/api/CultureData'

const props = defineProps(["level"])

const header = ref()
const chartData = ref()

const shiji = ["所属类别", "所属批次", "编号", "项目名称", "申报地区或单位"]

// 获取 API 接口数据
async function getChartData() {
    chartData.value = ((await getIntangibleculturalheritageMlByLevel(props.level)).data.data).map(item => {
        if (item.numbering === "null") {
            item.numbering = "----"
        }
        return {
            numbering: item.numbering,
            name: item.name,
            level: item.level,
            category: item.category,
            bttb: item.bttb,
        }
    })
    
    console.log(chartData.value);
}

onMounted(() => {
    getChartData().then(() => {
        header.value = ['编号', '项目名称', '级别' , '所属类别', '所属批次']
    })
})
</script>

<style lang="less" scoped>
</style>