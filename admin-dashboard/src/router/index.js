import User from '../components/Users/Users.vue'
import League from '../components/Leagues/Leagues.vue'
import Analytic from '../components/Analytics/Analytics.vue'
import ErrorPage from './404Error.vue'

export const routes = [
    {
        path: '*',
        name: 'error',
        component: ErrorPage
    },
    {
        path: '/', redirect: '/users'
    },
    {
        path: '/users',
        name: 'users', 
        component: User
    },
    {
        path: '/leagues',
        name: 'leagues', 
        component: League,
    },
    {
        path: '/analytics',
        name: 'analytics', 
        component: Analytic
    }
]

