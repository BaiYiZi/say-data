<template>
    <div v-if="loading" class="TouristAttractionInfo">
        <div class="img-box" 
        :style="{ 'background-image': 'url('+ props.imgItem.infoImgPath +')'}"
        >
            
        </div>
        <div class="info-box">
            <div class="item">名称：{{ infoData.name }}</div>
            <div class="item">中文名：{{ infoData.cname }}</div>
            <div class="item">位置：{{ infoData.address }}</div>
            <div class="item">级别：{{ infoData.level }}</div>
            <div class="item">开放时间：{{ infoData.time }}</div>
            <div class="item">票价：{{ infoData.tickets }}</div>
            <div class="item">概要：
                <div class="synopsis">
                    {{ infoData.synopsis1 }}
                </div>
                <div class="synopsis">
                    {{ infoData.synopsis2 }}
                </div>
                <div class="synopsis">
                    {{ infoData.synopsis3 }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAttractionsInfo } from '@/api/TouristAttractionData'

const props = defineProps(["name","imgItem"])

const infoData = ref()

const loading = ref(false)

async function getInfoData() {
    infoData.value = (await getAttractionsInfo(props.name)).data.data[0]
}

onMounted(() => {
    getInfoData().then(()=> {
        loading.value = true
    })
})

</script>

<style lang="less" scoped>
.TouristAttractionInfo {
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
        height: 20px;
        color: #282828;
    }

    .synopsis {
        text-indent: 32px;
    }
}

</style>