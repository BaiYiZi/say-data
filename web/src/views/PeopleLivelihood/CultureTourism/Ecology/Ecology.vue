<template>
    <div class="Ecology">
        <div class="left">
            <frame title="全市绿地绿化面积情况">
                <Greenbelt/>
            </frame>
        </div>
        <div class="right">
            <div class="right-up">
                <frame title="PM2.5 年平均浓度趋势">
                    <PM/>
                </frame>
            </div>
            <div class="right-down">
                <frame title="全市森林覆盖率趋势">
                    <ForestGreenbelt/>
                </frame>
            </div>
        </div>
    </div>
</template>

<script setup>
import frame from '@/components/Frame.vue'
import Greenbelt from '@/views/PeopleLivelihood/CultureTourism/Ecology/Greenbelt.vue'
import PM from '@/views/PeopleLivelihood/CultureTourism/Ecology/PM.vue'
import ForestGreenbelt from '@/views/PeopleLivelihood/CultureTourism/Ecology/ForestGreenbelt.vue'
</script>

<style scoped>
.Ecology {
    width: 1580;
    height: 960px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.left {
    width: 780px;
    height: 960px;
}

.right {
    width: 780px;
    height: 960px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.right-up {
    width: 780px;
height: 470px;
}

.right-down {
    width: 780px;
height: 470px;
}
</style>