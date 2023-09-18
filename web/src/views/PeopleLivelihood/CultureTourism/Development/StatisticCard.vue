<template>
  <div class="card">
    <div class="card-item opening">
        <div class="tilte-text">市区开放公园数量</div>
        <span class="tilte-text  big">
            {{ data.opening }}
            <span class="tilte-text">座</span>
        </span>
    </div>
    <div class="card-item greenSpace">
        <div class="tilte-text">林下空间绿地共享面积</div>
        <span class="tilte-text  big">
            {{ data.greenSpace }}
            <span class="tilte-text">万平方米</span>
        </span>
        
    </div>
    <div class="card-item lawnShared">
        <div class="tilte-text">草坪共享面积</div>
        <span class="tilte-text  big">
            {{ data.lawnShared }}
            <span class="tilte-text">万平方米</span>
        </span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getParkgreenAreas } from '@/api/DevelopmentData'

const data = ref([])

// 获取 API 接口数据
async function getChartData() {
    data.value = ((await getParkgreenAreas()).data.data)[0]
}

onMounted(() => {
    getChartData()
})

</script>

<style lang="less" scoped>
.card{
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 12px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 16px  rgba(0, 0, 0, 0.05);
}

.card-item {
    width: 242px;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.opening {
    background-image: url("../../../../assets/PeopleLivelihood/CulturalTourism/card1.png");
}

.greenSpace {
    background-image: url("../../../../assets/PeopleLivelihood/CulturalTourism/card2.png");
}

.lawnShared {
    background-image: url("../../../../assets/PeopleLivelihood/CulturalTourism/card3.png");
}

.tilte-text {
    width: 200px;
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    font-weight: 400;
}

.big {
    font-size: 38px;
}
</style>