// Dom
const chartDom = ref(undefined)
// 图表
const chart = ref(undefined)

// 初始化图表
function initChart() {
    // 获取Dom元素
    chartDom.value = document.getElementById(props.id).getAttribute("_echarts_instance_");
    // 初始化图表
    chart.value = echarts.getInstanceById(chartDom) || echarts.init(document.getElementById(props.id));

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
function renderChart() {
    // 隐藏加载动画
    chart.value.hideLoading();

    // 图表样式设置
    const option = {
        tooltip: {
            trigger: 'item'
        },
        color: [
            // '#2B3BBD',
            // '#2846A5',
            '#24518D',
            '#235F82',
            '#267C99',
            '#2997AE',
            '#2DB4C5',
            '#33C8C1',
            '#3DDAB2',
            '#46EEA1',
        ],
        legend: {
            type: 'scroll',
            orient: 'vertical',
            align: 'left',
            right: 20,
            bottom: 20,
            itemHeight: 12,
            itemGap: 10,
            height: '50%',
            pageTextStyle: {
                color: 'rgba(255,255,255,0.25)'
            },
            icon: 'circle', // 图例的图标样式
            textStyle: { //图例的文字样式
                color: 'rgba(255,255,255,0.75)',
            },
        },
        series: [
            {
                type: "pie",
                radius: ['35%', '70%'],
                center: ["40%", "50%"],
                label: { show: false },
                data: chartData.value
            }
        ]
    };

    // 渲染图表设置
    chart.value.setOption(option);
}