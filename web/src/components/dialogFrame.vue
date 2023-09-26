<template>
    <div class="dialog" v-if="dialogVisble">
        <div class="dialog-context" 
        :style="{ 'height': props.height ? props.height : '550px', 'width': props.width ? props.width : '700px' }"
        >
            <p class="tips" @click="close">单击背景关闭</p>
            <slot></slot>
        </div>

        <div class="hidden" @click="close"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['id', 'title', 'height', 'width'])

const dialogVisble = ref(false)

const open = () => {
    dialogVisble.value = true
}

const confirm = () => {
    dialogVisble.value = false
}

const close = () => {
    dialogVisble.value = false
}

defineExpose({
    dialogVisble,
    open,
    confirm,
    close
}) 
</script>

<style lang="less">
.dialog {
    height: 1080px;
    width: 1920px;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999; //防止被遮挡调到最大值
    position: fixed;
}

.dialog-context {
    width: 700px;
    z-index: 999;
}

.hidden {
    left: 0;
    top: 0;
    height: 1080px;
    width: 1920px;
    position: fixed;
    display: block;
    background-color: #000000;
    opacity: 0.2;
}

.tips {
    height: 30px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
}
</style>