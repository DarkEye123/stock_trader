import TraderHome from './components/TraderHome.vue';

export const routes = [{
        name: 'home',
        path: '',
        component: TraderHome
    },
    {
        path: '*',
        redirect: {
            name: 'home'
        }
    }
];