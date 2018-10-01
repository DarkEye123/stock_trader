import TraderHome from './components/TraderHome.vue';
import Stocks from './components/Stocks.vue';
import Portfolio from './components/Portfolio.vue';

export const routes = [{
        name: 'home',
        path: '',
        component: TraderHome
    },
    {
        name: 'stocks',
        path: 'stocks',
        component: Stocks
    },
    {
        name: 'portfolio',
        path: 'portfolio',
        component: Portfolio
    },
    {
        path: '*',
        redirect: {
            name: 'home'
        }
    }
];