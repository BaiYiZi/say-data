<template>
    <div class="TouristAttraction">
        <div class="up">
            <div class="up-left">
                <div class="up-left-up">
                    <TouristAttractionCarousel/>
                </div>
                <div class="up-left-down">
                    <div class="up-left-down-left">
                        <frame title="景区适游指数排行">
                            <Tourworthy/>
                        </frame>
                    </div>
                    <div class="up-left-down-right">
                        <frame title="景区拥堵指数排行">
                            <Congestion/>
                        </frame>
                    </div>
                </div>
            </div>
            <div class="up-right">
                <frame title="A级景区分布">
                    <ALevelTourisAttraction/>
                </frame>
            </div>
        </div>
        <div class="down">
            <div class="down-left">
                <frame title="保定星级酒店数量及其各级数量占比">
                    <NumberOfHotel/>
                </frame>
            </div>
            <div class="down-right">
                <frame title="各景区客流量">
                    <Footfall/>
                </frame>
            </div>
        </div>
    </div>
</template>

<script setup>
import frame from '@/components/Frame.vue'
import TouristAttractionCarousel from './TouristAttractionCarousel/TouristAttractionCarousel.vue'
import Tourworthy from './Tourworthy.vue'
import ALevelTourisAttraction from './ALevelTourisAttraction/ALevelTourisAttraction.vue'
import Congestion from './Congestion.vue'
import NumberOfHotel from './Hotel/NumberOfHotel.vue'
import Footfall from './Footfall.vue'
</script>

<style lang="less" scoped>
.TouristAttraction {
    width: 1580px;
    height: 960px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}
.up {
    width: 1580px;
    height: 584px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.up-left {
    width: 780px;
    height: 584px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.up-left-up {
    width: 780px;
    height: 200px;
}

.up-left-down {
    width: 780px;
    height: 364px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.up-left-down-left {
    width: 380px;
    height: 364px;
}

.up-left-down-right {
    width: 380px;
    height: 364px;
}

.up-right {
    width: 780px;
    height: 584px;
}

.down {
    width: 1580px;
    height: 356px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.down-left {
    width: 380px;
    height: 356px;
}

.down-right {
    width: 1180px;
    height: 356px;
}
</style>