import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

import 'remixicon/fonts/remixicon.css';
import './assets/css/style.css';

function bootstrap() {
    const app = createApp(App);

    app.use(router).mount('#app');
}

bootstrap()
