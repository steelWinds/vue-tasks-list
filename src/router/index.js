import { createRouter, createWebHistory } from 'vue-router';
import { checkAuthKey } from '../modules/checkAuthKey.js';

import TasksList from '../views/TasksList.vue';
import TaskEditor from '../views/TaskEditor.vue';
import Registration from '../views/Registration.vue';
import Authorization from '../views/Authorization.vue';
import Home from '../views/Home.vue';
import UnavailableURL from '../views/UnavailableURL.vue';
import Task from '../views/Task.vue';

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: Home,
        beforeEnter: () => {
            if (checkAuthKey('auth-key', true) === true) {
                return {name: 'tasks-list'};
            }

            return true;
        }
    },

    {
        path: '/list',
        name: 'tasks-list',
        component: TasksList,
        beforeEnter: () => {
            return checkAuthKey('auth-key', false);
        }
    },

    {
        path: '/editor',
        name: 'task-editor',
        component: TaskEditor,
        beforeEnter: () => {
            return checkAuthKey('auth-key', false);
        }
    },

    {
        path: '/registration',
        name: 'registration',
        component: Registration
    },

    {
        path: '/authorization',
        name: 'authorization',
        component: Authorization
    },

    {
        path: '/:pathMatch(.*)*', 
        component: UnavailableURL
    },

    {
        path: '/task/:pk',
        alias: '/:pk',
        props: true,
        name: 'task',
        component: Task
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
