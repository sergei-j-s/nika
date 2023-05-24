<template>
    <div v-on:click="$emit('albums', user.id)" class="item">
        <i :class="{ 'ri-add-circle-fill icon-open': !user_view, 'ri-indeterminate-circle-fill icon-close': user_view && !album_load, 'ri-loader-4-line icon-load spin': album_load }" class="item-icon"></i>
        <div class="item-name">{{ user.name }}</div>
    </div>
</template>

<script setup>
defineProps({
    user: Object,
    user_view: Boolean,
    album_load: Boolean
});

defineEmits(['albums']);
</script>

<style scoped>
</style>