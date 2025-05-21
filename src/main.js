// main.js or main.ts

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap and BootstrapVueNext CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Import BootstrapVueNext
import BootstrapVueNext from 'bootstrap-vue-next'

const app = createApp(App)

app.use(BootstrapVueNext)

app.use(router);

app.mount('#app')
