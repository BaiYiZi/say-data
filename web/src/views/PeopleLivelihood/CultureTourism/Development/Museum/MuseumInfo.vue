<template>
    <div v-if="loading" class="MuseumInfo">
        <!-- <div class="img-box" 
        :style="{ 'background-image': 'url(' + imgItem.path + ')' }"
        >
        </div> -->
        <div class="info-box">
            <div class="item">名称：{{ infoData.name }}</div>
            <div class="item">行政区划：{{ infoData.address }}</div>
            <div class="item">质量等级：{{ infoData.level }}</div>
            <div class="item">性质：{{ infoData.tag }}</div>
            <div class="item">全部藏品件：{{ infoData.collection }}套</div>
            <div class="item">馆藏珍贵文物件：{{ infoData.artefacts }}套</div>
            <div class="item">年参观量：{{ infoData.visitors }}万</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { getMuseumInfo } from '@/api/DevelopmentData'

const props = defineProps(["museumName"])
const infoData = ref([])
const loading = ref(false)

// 获取 API 接口数据
async function getChartData() {
    infoData.value = ((await getMuseumInfo(props.museumName)).data.data).map(item => {
        return {
            name: item.name,
            address: item.address,
            level: item.level,
            tag: item.tag,
            collection: item.collection,
            artefacts: item.artefacts,
            visitors: item.visitors
        }
    })[0]
}

onMounted(() => {
    getChartData().then(() => {
        loading.value = true
    })
})
</script>

<style lang="less" scoped>
.MuseumInfo {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .img-box {
        height: 250px;
        /* 背景图垂直、水平均居中 */
        background-position: center center;
        /* 背景图不平铺 */
        background-repeat: no-repeat;
        // /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
        // background-attachment: fixed;
        // /* 让背景图基于容器大小伸缩 */
        // background-size: cover;
        // /* 设置背景颜色，背景图加载过程中会显示背景色 */
        // background-color: #464646;
    }
    .info-box {
        height: 400px;
        padding: 10px 30px 30px;
    }
    .item {
        height: 30px;
        color: #282828;
        font-size: 20px;
    }

    .synopsis {
        text-indent: 32px;
    }
}
</style>