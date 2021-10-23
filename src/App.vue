<template>
    <article 
        class="
            container
            w-full
            h-full
            max-w-full
            min-h-screen">

        <header 
            is="vue:header"
            :currentComponent="currentComponent"></header>

        <main>
            <transition name="todo-components" mode="out-in">
                <todo-list
                    @updateTasksList="getTasksList" 
                    v-if="currentComponent === 'todo-list'">
                </todo-list>
                <todo-editor 
                    @updateTasksList="getTasksList"
                    v-else-if="currentComponent === 'todo-editor'">
                </todo-editor>
            </transition>
        </main>
    </article>
</template>

<script>
import { computed } from 'vue';
import { minima } from './modules/minima.js';

import TodoList from './components/TodoList.vue';
import TodoEditor from './components/TodoEditor.vue';
import Header from './components/Header.vue';

export default {
    data() {
        return {
            currentComponent: 'todo-list',
            tasksList: []
        };
    },

    provide() {
        return {
            components: {
                todoList: 'todo-list',
                todoEditor: 'todo-editor'
            },
            currentComponent: computed(() => {
                return this.currentComponent;
            }),
            switchComponent: this.switchComponent,
            tasksList: computed(() => {
                return this.tasksList;
            })
        };
    },

    components: {
        Header,
        TodoList,
        TodoEditor
    },

    mounted() {
        this.getTasksList();
    },

    methods: {
        switchComponent(component) {
            this.currentComponent = component;
        },

        async getTasksList() {
            let tasksList = await minima({
                url: 'https://mtasks.herokuapp.com/tasks/',
                json: true
            }); 

            this.tasksList = tasksList;

            console.log(tasksList);
        }
    },

};
</script>

<style>
.todo-components-enter-active {
    transition: all .35s ease-out;
}

.todo-components-leave-active {
    transition: all .15s ease-in;
}

.todo-components-enter-from,
.todo-components-leave-to {
    opacity: 0;
    transform: translateY(-100px);
}
</style>
