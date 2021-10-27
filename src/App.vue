<template>
    <article 
        class="
            container
            w-full
            h-full
            max-w-full
            min-h-screen">

        <header is="vue:header"></header>

        <main>
            <transition name="task-components" mode="out-in">
                <tasks-list
                    v-if="currentComponent === 'todo-list'">
                </tasks-list>

                <task-editor
                    @switchHeaderPositionType="switchHeaderPositionType" 
                    v-else-if="currentComponent === 'todo-editor'">
                </task-editor>
            </transition>
        </main>
    </article>
</template>

<script>
import { computed } from 'vue';
import ScrollReveal from 'scrollreveal';

import TasksList from './components/TasksList.vue';
import TaskEditor from './components/TaskEditor.vue';
import Header from './components/Header.vue';

export default {
    data() {
        return {
            currentComponent: 'todo-list',
            headerPositionType: 'sticky',
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
        };
    },

    components: {
        Header,
        TasksList,
        TaskEditor
    },

    methods: {
        switchComponent(component) {
            this.currentComponent = component;
        },

        switchHeaderPositionType(type) {
            if (type !== 'static' && type !== 'sticky') {
                return;
            }

            this.headerPositionType = type;
        }
    },

};
</script>
