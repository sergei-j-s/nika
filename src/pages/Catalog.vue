<template>
    <div class="block">
        <div v-for="user in users_list" :key="user.id" class="items">
            <CatalogItem v-on:albums="albumsList($event)" :user="user" :user_view="user_view.includes(user.id)" :album_load="album_load.includes(user.id)" />
            <div v-show="user_view.includes(user.id) && albums_list[user.id]">
                <div v-for="album in albums_list[user.id]" :key="album.id" class="items">
                    <AlbumItem v-on:photos="photosList($event)" :album="album" :albums_view="albums_view.includes(album.id)" :photo_load="photo_load.includes(album.id)" />
                    <div v-show="albums_view.includes(album.id) && photos_list[album.id]" class="photos_list">
                        <div v-for="photo in photos_list[album.id]" :key="photo.id" class="items">
                            <PhotoItem v-on:view="photoView($event)" v-on:store="storeState($event)" :photo="photo" :store_photos="!!store_photos[photo.id]" :show_title="false" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PhotoViewer v-if="photo_view" v-on:close="photo_view = null" :photo_view="photo_view" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CatalogItem from '@/components/CatalogItem.vue';
import AlbumItem from '@/components/AlbumItem.vue';
import PhotoItem from '@/components/PhotoItem.vue';
import PhotoViewer from '@/components/PhotoViewer.vue';

import ApiService from '@/services/api.service';

const users_list = ref([]);
const user_view = ref([]);
const albums_list = ref({});
const albums_view = ref([]);
const album_load = ref([]);
const photos_list = ref({});
const photo_load = ref([]);
const photo_view = ref(null);
const store_photos = ref({});

const usersList = () => {
    ApiService.Users().then(
        res => {
            users_list.value = res.data;
        },
        error => {
            console.log((error.response && error.response.data) || error.message || error.toString());
        }
    );
};

const albumsList = (id) => {
    if (!user_view.value.includes(id)) {
        user_view.value.push(id);
    } else {
        let i = user_view.value.indexOf(id);
        user_view.value.splice(i, 1);
    };

    if (!albums_list.value[id]) {
        album_load.value.push(id);

        ApiService.Albums({ id }).then(
            res => {
                albums_list.value[id] = res.data;

                let i = album_load.value.indexOf(id);
                album_load.value.splice(i, 1);
            },
            error => {
                console.log((error.response && error.response.data) || error.message || error.toString());
            }
        );
    };
};

const photosList = (id) => {
    if (!albums_view.value.includes(id)) {
        albums_view.value.push(id);
    } else {
        let i = albums_view.value.indexOf(id);
        albums_view.value.splice(i, 1);
    };

    if (!photos_list.value[id]) {
        photo_load.value.push(id);

        ApiService.Photos({ id }).then(
            res => {
                photos_list.value[id] = res.data;

                let i = photo_load.value.indexOf(id);
                photo_load.value.splice(i, 1);
            },
            error => {
                console.log((error.response && error.response.data) || error.message || error.toString());
            }
        );
    };
};

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
    usersList();
});

</script>

<style scoped></style>