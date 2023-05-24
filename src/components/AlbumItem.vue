<template>
    <div v-on:click="$emit('photos', album.id)" class="item sub">
        <i :class="{ 'ri-add-circle-fill icon-open': !albums_view, 'ri-indeterminate-circle-fill icon-close': albums_view && !photo_load, 'ri-loader-4-line icon-load spin': photo_load }" class="item-icon"></i>
        <div class="item-name">{{ album.title }}</div>
    </div>
</template>

<script setup>
defineProps({
    album: Object,
    albums_view: Boolean,
    photo_load: Boolean
});

defineEmits(['photos']);
</script>

<style scoped>
</style>