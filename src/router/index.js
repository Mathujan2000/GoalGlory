import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ClubsPage from '../components/ClubsPage.vue';
import ContactPage from '@/components/ContactPage.vue';
import PlayerPage from '../components/PlayerPage.vue';
import PlayerDetail from '../components/PlayerDetail.vue';


const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/clubs', component: ClubsPage, name: 'clubs' },
    { path: '/contact', component: ContactPage, name: 'contact' },
    { path: '/players', component: PlayerPage, name: 'players' },
    { path: '/players/:id', component: PlayerDetail, name: 'player-detail' }, // ⬅️ player detail route
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
