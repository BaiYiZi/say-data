<template>
    <div class="list">
        <li class="item" v-for="item in listData" :key="item" @click="goUrl(item.link)">
            <span>{{ item.name }}</span>
        </li>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const listData = ref([])

function setListData(data) {
    listData.value = data
}

function goUrl(url) {
    window.open(url, "_blank")
}

defineExpose({
    setListData
})
</script>

<style lang="less" scoped>
    * {
        list-style-type:none;
    }

    .list {
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;
    }

    .item {
        // width: calc( 100% - 20px );
        width: 100%;
        min-height: 84px;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;

        color: white;
        font-size: 18px;
        font-weight: 500;
        font-family: "SourceHanSans";
        border-radius: 12px;
        background: linear-gradient(90deg, rgba(153, 153, 255, 1) 0%, rgba(117, 105, 240, 1) 100%);
        box-shadow: 0px 4px 16px  rgba(0, 0, 0, 0.05);
    }

    .item:hover{
        opacity: 0.9;
        font-size: 18.5px;
        cursor:pointer;
    }

    .item span {
        text-align: center;
    }

</style>