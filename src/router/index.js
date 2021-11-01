import { createRouter, createWebHistory } from 'vue-router';


import TasksList from '../views/TasksList.vue';
import TaskEditor from '../views/TaskEditor.vue';
import Registration from '../views/Registration.vue';
import Authorization from '../views/Authorization.vue';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        redirect: '/home'
    },

    {
        path: '/home',
        name: 'home',
        component: Home,
    },

    {
        path: '/list',
        name: 'tasks-list',
        component: TasksList
    },

    {
        path: '/editor',
        name: 'task-editor',
        component: TaskEditor
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
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
