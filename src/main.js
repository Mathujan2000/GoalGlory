// main.js or main.ts

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap and BootstrapVueNext CSS
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Import BootstrapVueNext
import BootstrapVueNext from 'bootstrap-vue-next'

const app = createApp(App)

app.use(BootstrapVueNext)

app.use(router);

app.mount('#app')
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => {
        console.log('✅ Service worker geregistreerd:', reg.scope);
      })
      .catch(err => {
        console.error('❌ Service worker registratie mislukt:', err);
      });
  });
}
