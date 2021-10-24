<template>
    <article class="todo-item">
        <material-button
            class="todo-item__btn"
            @clickEvent="removeTask()">
            
            <template #content>
                remove
            </template>
        </material-button>

        <h3 class="todo-item__title mb-1">
            {{ this.title }}
        </h3>

        <i class="todo-item__subtitle">
            {{ this.subtitle }}
        </i>

        <p class="todo-item__content mt-3">
            {{ this.text }}
        </p>
    </article>
</template>

<script>
import MaterialButton from './MaterialButton.vue';

export default {
    data() {
        return {};
    },

    props: {
        title: String,
        subtitle: String,
        text: String
    },

    emits: [
        'removeTaskInServer',
        'removeLocalTask'
    ],

    components: {
        MaterialButton
    },

    methods: {
        removeTask() {
            this.$emit('removeLocaleTask');

            this.$emit('removeTaskInServer');
        }
    }
};
</script>

<style>
.todo-item {
    position: relative;

    padding: 1em;
    border-radius: 5px;

    background-color: #35495e;
    color: white;
    overflow-wrap: break-word;
    hyphens: auto;
    text-overflow: ellipsis;

    overflow-x: hidden;
    overflow-y: auto !important;

    @media(max-width: 640px) {
        & {
            @apply 
                flex
                flex-col
                items-start;

            &__btn {
                @apply mb-5;

                position: static !important;

                align-self: flex-end;
            }
        }
    }

    @supports not (hyphens: auto) {
        overflow-wrap: break-word;
    }


    &__title {
        @apply w-full max-w-xs text-xl;
    }

    &__subtitle {
        @apply w-full max-w-xs text-sm;

        display: inline-block;

        overflow-wrap: normal;
        word-break: none;
        hyphens: none;
        text-overflow: ellipsis;

        overflow-x: hidden;
        overflow-y: visible;
    }

    &__content {
        position: relative;

        text-align: left !important;
        white-space: pre-wrap;

        &:before {
            position: absolute;
            top: -6px;
            left: 0;

            content: "";

            display: block;
            width: 50%;
            height: 2px;

            background-color: #42b883;
        }
    }

    &__btn {
        position: absolute;
        top: 1em;
        right: 1em;

        border: {
            right: none !important;
            left: none !important;
        }
        
        background-color: #42b883;

        &:after {
            display: none;
        }

        &:hover {
            border-bottom-color: #42b883;

            background-color: transparent;
            color: #42b883;
        }
    }
}
</style>
