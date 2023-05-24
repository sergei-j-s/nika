<template>
    <div v-on:click.self="$emit('close')" class="modal">
        <div class="close">
            <i v-on:click="$emit('close')" class="ri-close-line"></i>
        </div>
        <div class="viewer">
            <div class="loader">
                <i class="ri-loader-4-line spin"></i>
            </div>
            <div :style="{ 'background-image': `url(${photo_view.url})` }" class="photo"></div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    photo_view: Object
});

defineEmits(['close']);
</script>

<style scoped>
.modal {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}

.close {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
}

.close>i {
    color: #fff;
    font-size: 36px;
}

.viewer {
    width: 400px;
    height: 400px;
    background: #fff;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
}

.viewer>.loader {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
}

.viewer>.loader>i {
    color: #0f7cbf;
    font-size: 36px;
    position: absolute;
    top: -20px;
    left: -18px;
}

.viewer>.photo {
    width: 100%;
    height: 100%;
    background-size: cover;
    border-radius: 5px;
    box-shadow: none;
    position: relative;
    z-index: 2;
    cursor: default;
}
</style>