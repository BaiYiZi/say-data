<template>
    <!-- 图表容器 -->
    <div ref="chartDom" style="width: 100%; height: 100%;"></div>
</template>

<script setup>
import { ref, shallowRef } from 'vue'
import * as echarts from "echarts"

// 图表
const chart = shallowRef(undefined)
// 图表dom节点
const chartDom = ref(null)

// 加载动画样式
const loadingStyle = {
    text: 'loading',
    color: '#eeeeee',
    textColor: '#fff',
    maskColor: 'rgba(255, 255, 255, 0)',
    zlevel: 0,
}

// 初始化图表
function initChart() {
    // 初始化图表
    chart.value = echarts.init(chartDom.value)
     
    // 显示加载动画
    chart.value.showLoading(loadingStyle)
}

// 初始化图表
function initChartById() {
    // 获取Dom元素
    const dom = document.getElementById(id).getAttribute("_echarts_instance_")
    // 初始化图表
    chart.value = echarts.getInstanceById(dom) || echarts.init(document.getElementById(id))
    // 显示加载动画
    chart.value.showLoading(loadingStyle)
}

function renderChart(chart0ption) {
    // 隐藏加载动画
    chart.value.hideLoading();
    // 渲染图表
    chart.value.setOption(chart0ption)
}

defineExpose({
    echarts,
    chart,
    initChart,
    initChartById,
    renderChart
})
</script>

<style>

</style>