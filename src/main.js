import { createApp } from 'vue';
import router from './router/index.js';

import App from './App';

import './assets/css/variables.css';
import './assets/css/tailwindcss.css';
import './assets/css/myNormalize.css';
import './assets/css/vueAnimations.css';

let app = createApp(App).use(router);

app.config.unwrapInjectedRef = true;

app.mount('#app');
