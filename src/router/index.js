// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import PlayerPage from '@/components/PlayerPage.vue';
import PlayerDetail from '@/components/PlayerDetail.vue';
import ClubsPage from '@/components/ClubsPage.vue';
import ContactPage from '@/components/ContactPage.vue';

const routes = [
    {
        path: '/',
        component: HomePage,
        meta: {
            title: 'Home - GoalLine',
            description: 'Your ultimate football companion. Explore clubs, players, and more.',
        },
    },
    {
        path: '/players',
        component: PlayerPage,
        meta: {
            title: 'Players - GoalLine',
            description: 'Discover football players and their details.',
        },
    },
    {
        path: '/players/:id',
        component: PlayerDetail,
        meta: {
            title: 'Player Details - GoalLine',
            description: 'Detailed information about individual football players.',
        },
    },
    {
        path: '/clubs',
        component: ClubsPage,
        meta: {
            title: 'Clubs - GoalLine',
            description: 'Explore football clubs and their competitions.',
        },
    },
    {
        path: '/contact',
        component: ContactPage,
        meta: {
            title: 'Contact Us - GoalLine',
            description: 'Get in touch with GoalLine for inquiries and support.',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Update document title and meta description dynamically
router.afterEach((to) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    if (to.meta.description) {
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', to.meta.description);
        }
    }
});

export default router;