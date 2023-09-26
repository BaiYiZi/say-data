<template>
    <div class="context">
        <div class="left">
            <div class="left-up">
                <div class="left-up-left">
                    <frame title="景点">

                    </frame>
                </div>
                <div class="left-up-mid">
                    <frame title="景点">
                        <aGradeTouristAttraction />
                    </frame>
                </div>
                <div class="left-up-right">
                    <frame title="test"></frame>
                </div>
            </div>
            <div class="left-mid">
                <!-- <touristAttractionCarousel /> -->
            </div>
            <div class="left-down">
                <frame title="test"></frame>
            </div>
        </div>

        <div class="right">
            <div class="right-up">
                <frame title="test">
                    <aGradeTouristAttraction />
                </frame>
            </div>
            <div class="right-down">
                <frame title="test">

                </frame>
            </div>
        </div>
    </div>
</template>

<script setup>
import frame from '@/components/Frame.vue';
import aGradeTouristAttraction from 'AGradeTouristAttraction.vue';
import touristAttractionCarousel from '../PeopleLivelihood/CultureTourism/TouristAttraction/TouristAttractionCarousel/TouristAttractionCarousel.vue';
</script>


<style lang="less" scoped>
.context {
    width: 1540px;
    height: 950px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.left-up {
    width: 1096px;
    height: 302px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.left-up-left,
.left-up-mid,
.left-up-right {
    width: 352px;
    height: 302px;

    display: flex;
    flex-direction: column;
}

.left-mid {
    width: 1096px;
    height: 236px;
    overflow: hidden;
}

.left-down {
    width: 1096px;
    height: 372px;
}

.right {
    width: 424px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.right-up {
    width: 424px;
    height: 558px;
}

.right-down {
    height: 372px;
    width: 424px;
}
</style>