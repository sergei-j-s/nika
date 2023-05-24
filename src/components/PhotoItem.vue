<template>
    <div :style="{ 'background-image': `url(${photo.thumbnailUrl})` }" class="photo">
        <div v-on:click="$emit('view', photo)" class="tooltip">
            <div v-if="!show_title" class="title">
                {{ photo.title }}
            </div>
        </div>
        <div class="store">
            <i v-on:click="$emit('store', photo)" :class="{ 'active': store_photos }" class="ri-star-fill"></i>
        </div>
    </div>
    <div v-if="show_title" class="store_title">
        {{ photo.title }}
    </div>
</template>

<script setup>
defineProps({
    photo: Object,
    store_photos: Boolean,
    show_title: Boolean
});

defineEmits(['view', 'store']);
</script>