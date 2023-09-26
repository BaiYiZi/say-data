import { ref } from 'vue'
import * as echarts from "echarts"

export const mychart = () => {
    // 图表
    const chart = ref(undefined)

    // 初始化图表
    function initChart(id) {
        // 获取Dom元素
        const chartDom = document.getElementById(id).getAttribute("_echarts_instance_");
        // 初始化图表
        chart.value = echarts.getInstanceById(chartDom) || echarts.init(document.getElementById(id));

        // 显示加载动画
        chart.value.showLoading({
            text: 'loading',
            color: '#eeeeee',
            textColor: '#fff',
            maskColor: 'rgba(255, 255, 255, 0)',
            zlevel: 0,
        })
    }

    // 渲染图表
    function renderChart(option) {
        // 隐藏加载动画
        chart.value.hideLoading();
        // 渲染图表
        chart.value.setOption(option);
    }

    return { chart, initChart, renderChart }
}