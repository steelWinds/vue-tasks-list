<template>
    <article class="todo-list">
        <h2 class="todo-list__title mt-2 mb-10">Tasks List</h2>

        <h2 
            class="no-items-title text-center color-gray"
            v-if="tasksList.value.length === 0">
            
            No Tasks, please add them
        </h2>

        <section class="todo-list__items">
            <template
                v-for="task of tasksList.value"
                :key="task.pk">

                <todo-item 
                    v-bind="task"
                    @removeItem="removeItem(task.pk)"></todo-item>
            </template>
        </section>
    </article>
</template>

<script>
import { minima } from '../modules/minima.js';

import TodoItem from './TodoItem.vue';

export default {
    data() {
        return {
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

    methods: {
        async removeItem(key) {
            let deleteTask = await minima({
                url: `https://mtasks.herokuapp.com/tasks/${key}/`,
                method: 'DELETE'
            });    

            this.$emit('updateTasksList');
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
