<template>
    <article class="todo-list">
        <h2 class="todo-list__title mt-2 mb-10">Tasks List</h2>

        <h2 
            class="no-items-title text-center color-gray"
            v-if="tasksList.value.length === 0">
            
            No Tasks, please add them
        </h2>

        <h2
            class="no-items-title text-center color-gray"
            v-else-if="tasksList.value.length === null">
            
            Wait for tasks load
            
        </h2>

        <section 
            class="todo-list__items"
            v-else>
            
            <template
                v-for="(task, index) in tasksList.value"
                :key="index">

                <todo-item 
                    
                    v-bind="task"
                    @removeTaskInServer="removeTask(task.pk)"
                    @removeLocaleTask="removeLocaleTask(index)"></todo-item>
            </template>
        </section>
    </article>
</template>

<script>
import { minima } from '../modules/minima.js';
import ScrollReveal from 'scrollreveal';

import TodoItem from './TodoItem.vue';

export default {
    data() {
        return {
            revealOn: false
        };
    },

    inject: [
        'tasksList'
    ],

    emit: [
        'updateTasksList'
    ],

    components: {
        TodoItem,
    },

    mounted() {
        this.addRevealOnList(true);
    },

    updated() {
        this.addRevealOnList(); 
    },

    methods: {
        async removeTask(key) {
            let deleteTask = await minima({
                url: `https://mtasks.herokuapp.com/tasks/${key}/`,
                method: 'DELETE'
            });    
        },

        removeLocaleTask(index) {
            this.tasksList.value.splice(index, 1);
        },

        addRevealOnList( unlock = false ) {
            if (this.revealOn === true && unlock === false) {
                return;
            }

            if (unlock === false) {
                this.revealOn = true;
            }

            ScrollReveal({
                duration: 350,
                distance: '30px',
                opacity: .3,
                scale: .95,
            }).reveal('.todo-item');

        }
            
    }
};
</script>

<style>
@keyframes show {
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
}

.no-items-title {
    animation: show .45s ease-in-out;
}

.todo-list {
    @apply 
        flex
        flex-col;

    padding: 0 1em;
    padding-bottom: 1em;

    &__title {
        align-self: center;
        color: #35495e;
    }

    &__items {
        @apply space-y-4;
    }
}
</style>
