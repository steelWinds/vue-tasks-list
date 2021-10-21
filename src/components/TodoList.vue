<template>
    <article class="todo-list">
        <h2 class="todo-list__title mt-2 mb-10">Tasks List</h2>

        <h2 
            class="no-items-title text-center color-gray"
            v-if="tasksList.value.size === 0">
            
            No Tasks, please add them
        </h2>

        <section class="todo-list__items">
            <template
                v-for="[key, task] of tasksList.value"
                :key="key">

                <todo-item 
                    v-bind="task"
                    @removeItem="removeItem(key)"></todo-item>
            </template>
        </section>
    </article>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    data() {
        return {
        };
    },

    inject: [
        'tasksList'
    ],

    components: {
        TodoItem,
    },

    methods: {
        removeItem(key) {
            this.tasksList.value.delete(key);
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
