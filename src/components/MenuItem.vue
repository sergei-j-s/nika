<template>
    <div class="menu">
        <i v-if="item.icon" :class="item.icon" />
        {{ item.title }}
    </div>
</template>

<script setup>
defineProps({
    item: Object
});
</script>

<style scoped>
.menu {
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-template-rows: 20px;
    gap: 10px;
    align-items: center;
    justify-content: center;
    background-color: #f2f7fb;
    border-radius: 5px 5px 0px 0px;
    padding: 15px 20px;
}

.menu i {
    font-size: 20px;
}

.active i {
    color: #0f7cbf;
}
</style>