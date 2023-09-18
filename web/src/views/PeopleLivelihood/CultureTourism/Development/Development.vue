<template>
  <div class="Development">
    <div class="left">
        <div class="left-up">
            <StatisticCard/>
        </div>
        <div class="left-mid">
            <frame title="文旅局月活动频率">
                <Activity/>
            </frame>
        </div>
        <div class="left-down">
            <div class="left-down-left">
                <frame title="国内外游客创收趋势对比">
                    <RevenueDrevenue/>
                </frame>
            </div>
            <div class="left-down-right">
                <frame title="国内外游客数量趋势对比">
                    <RevenueNumber/>
                </frame>
            </div>
        </div>
    </div>
    <div class="right">
        <frame title="各地区博物馆数量分布">
            <MuseumAddress/>
        </frame>
    </div>
  </div>
</template>

<script setup>
import frame from '@/components/Frame.vue'
import StatisticCard from '@/views/PeopleLivelihood/CultureTourism/Development/StatisticCard.vue';
import Activity from './Activity.vue';
import RevenueNumber from './RevenueNumber.vue';
import RevenueDrevenue from './RevenueDrevenue.vue';
import MuseumAddress from './Museum/MuseumAddress.vue';
</script>

<style scoped>
.Development {
    width: 1580px;
    height: 960px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.left {
    width: 780px;
    height: 960px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.left-up {
    width: 780px;
    height: 200px;
}

.left-mid {
    width: 780px;
    height: 400px;
}

.left-down {
    width: 780px;
    height: 320px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.left-down-left {
    width: 380px;
    height: 320px;
}

.left-down-right {
    width: 380px;
    height: 320px;
}

.right {
    width: 780px;
    height: 960px;
}
</style>