import { createApp } from 'vue';

import App from './App';

import './assets/css/tailwindcss.css';
import './assets/css/myNormalize.css';
import './assets/css/vueAnimations.css';
import './assets/css/cssAnimations.css';

let app = createApp(App);

app.config.unwrapInjectedRef = true;

app.mount('#app');
