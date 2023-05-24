<template>
    <div class="menu_bar">
        <router-link v-for="e in menu" :key="e.name" :to="{ name: e.name }" class="url">
            <MenuItem :item="e" />
        </router-link>
    </div>
</template>

<script setup>
import MenuItem from './MenuItem.vue';

const menu = [{
    name: 'catalog',
    title: 'Каталог'
}, {
    name: 'store',
    title: 'Избранное',
    icon: 'ri-star-line'
}];
</script>

<style scoped>
.menu_bar {
    display: grid;
    grid-auto-flow: column;
    gap: 1px;
}

.url {
    color: #000;
    font-weight: bold;
    text-decoration: none;
}

.active>div {
    background: #fff;
}
</style>
