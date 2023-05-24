<template>
    <div class="block">
        <div v-if="Object.keys(store_photos).length === 0" class="blank">
            <div class="title">Список избранного пуст</div>
            <div class="description">Добавляйте изображения, нажимая на звёздочки</div>
        </div>
        <div class="photos_list">
            <div v-for="photo in store_photos" :key="photo.id" class="items">
                <PhotoItem v-on:view="photoView($event)" v-on:store="storeState($event)" :photo="photo" :store_photos="!!store_photos[photo.id]" :show_title="true" />
            </div>
        </div>
        <PhotoViewer v-if="photo_view" v-on:close="photo_view = null" :photo_view="photo_view" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PhotoItem from '@/components/PhotoItem.vue';
import PhotoViewer from '@/components/PhotoViewer.vue';

const store_photos = ref({});
const photo_view = ref(null);

const storeState = (photo) => {
    let { id } = photo;

    if (!store_photos.value[id]) {
        store_photos.value[id] = photo;
    } else {
        delete store_photos.value[id];
    };

    localStorage.store_photos = JSON.stringify(store_photos.value);
};

const photoView = (photo) => {
    photo_view.value = photo;
};

onMounted(() => {
    if (!localStorage.store_photos) {
        localStorage.store_photos = JSON.stringify({});
    } else {
        store_photos.value = JSON.parse(localStorage.store_photos);
    };
});

</script>

<style scoped></style>