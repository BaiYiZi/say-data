<template>
    <div class="Info">
        <div class="img-box">
            <img :src="props.infoData.infoImgPath" alt="loading">
        </div>
        <div class="info-box" v-if="loading">
            <div class="title">
                <div class="title-text">{{ infoData.name }}</div>
                <div class="level">特色小吃</div>
            </div>
            <hr class="hr">
            <div class="info">
                <div class="info-item"><span>英文名 ：</span>{{ infoData.ename }}</div>
                <div class="info-item"><span>口感 ：</span>{{ infoData.palate }}</div>
                <div class="info-item"><span>配料 ：</span>{{ infoData.ingredients }}</div>
                <div class="row">
                    <div class="info-item"><span>不适宜人群 ：</span>暂无</div>
                    <div class="info-item" style="margin-left: 24px;"><span>最佳搭配 ：</span>暂无</div>
                </div>
            </div>
            <hr class="hr">
            <div class="particulars">
                <div class="info-item">
                    <span>详情 ：</span>
                    <div class="text">
                        <span v-for="item in infoData.history" :key="item">
                            {{ item }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getCulinarySpecialtiesFood } from '@/api/CultureData'

const props = defineProps(["infoData"])

const infoData = ref()

const loading = ref(false)

async function getInfoData() {
    infoData.value = (await getCulinarySpecialtiesFood(props.infoData.name)).data.data[0]
}

onMounted(() => {
    getInfoData().then(() => {
        loading.value = true
    })
})
</script>

<style lang="less" scoped>
.Info {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    .img-box {
        width: 555px;
        height: 340px;
        margin-left: 10px;
    }

    .info-box {
        width: 555px;
        height: 340px;
        margin-right: 10px;

        .title {
            width: 555px;
            height: 84px;
            display: flex;
            flex-direction: row;
            align-items: baseline;

            .title-text {
                height: 32px;
                width: fit-content;
                font-size: 28px;
            }

            .level {
                height: 28px;
                line-height: 28px;
                width: fit-content;
                margin-left: 6px;
                font-size: 22px;
                padding: 0px 10px 0px;

                border-radius: 4px;
                color: #FC8B21;
                background-color: #FFE6CF;
            }
        }

        .info {
            width: 555px;
            height: 128px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            padding: 16px 0px 16px 0px;

            .row {
                display: flex;
                flex-direction: row;
            }
        }

        .particulars {
            width: 555px;
            height: 128px;

            padding: 16px 0px 16px 0px;

            .text {
                width: 100%;
                height: 94px;
                padding: 10px;
                display: flex;
                flex-direction: column;
                overflow: scroll;

                border-radius: 8px;
                background-color: rgba(233, 233, 233, 0.35);

                span {
                    text-indent: 24px;
                    margin-bottom: 12px;
                }
            }
        }
    }

    ::-webkit-scrollbar {
        width: 0;
    }

    .info-item {
        width: fit-content;
        height: 18px;
        line-height: 18px;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        color: rgba(66, 66, 66, 1);
        text-align: left;
        vertical-align: middle;

        span {
            color: rgba(130, 130, 130, 1);
        }
    }

    .hr {
        border: none;
        width: 100%;
        height: 1px;
        opacity: 1;
        background: rgba(217, 217, 217, 0.38);
    }
}
</style>