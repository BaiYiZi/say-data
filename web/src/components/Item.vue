<template>
    <div class="item">
        <div class="title">
            <span class="text">{{ props.title }}</span>
            <span class="text more" v-if="props.more" @click="toMore">更多</span>
        </div>
        <div class="chart-content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(["title", "more"]);

function toMore() {
    window.open(props.more)
}


</script>

<style lang="less" scoped>
.item {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    border-radius: 16px;
    background: rgba(115, 103, 240, 0.07);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
}

.title {
    height: 44px;
    width: 100%;
    padding: 20px 20px 0px;
    // border: 1px solid #fff;

    display: flex;
    align-items: baseline;
    justify-content: space-between;

    .text {
        font-size: 24px;
        color: #989898;
        font-size: 24px;
        font-family: 'SourceHanSans';
    }

    .more {
        font-size: 18px;
    }

    .more:hover {
        color: #8685FC;
        cursor: pointer;
    }
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