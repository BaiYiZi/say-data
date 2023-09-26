<template>
    <div class="item">
        <div class="title">
            <div class="left">
                <img src="@/assets/PeopleLivelihood/CulturalTourism/title.svg">
                <span class="text">{{ props.title }}</span>
            </div>
            
            <!-- <img v-if="isDrillDown" @click="close" class="close-button" src="@/assets/PeopleLivelihood/CulturalTourism/close button.svg"> -->
        </div>
        <hr>
        <div class="chart-content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue';
import emitter from '@/utils/bus'

const props = defineProps(["title", "drillDownFlag"]);

const isDrillDown = ref(props.drillDownFlag)

function close() {
    emitter.emit('closeDrillDownFrame')
    console.log(emitter)
}

</script>

<style lang="less" scoped>
.item {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    border-radius: 10px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
}

.title {
    height: 42px;
    width: 100%;
    // border: 1px solid #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
        img {
            width: 12px;
            height: 18px;
            margin-left: 12px;
            margin-right: 6px;
        }
        .text {
            color: #6E6E6E;
            font-size: 15px;
            font-family: 'SourceHanSans';
            font-weight: bold;
        }
    }
}

hr {
    height: 2px;
    width: 100%;
    border: none;
    background: #DEDEDE;
}

.chart-content {
    height: calc(100% - 44px);
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px solid #fff;
}
</style>