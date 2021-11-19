<template>
    <article class="task-item">
        <section
            class="
                task-item__btns-list">
            
            <material-button
                class="task-item__btn"
                @click="removeTask">
                
                remove
            </material-button>

            <material-button
                class="task-item__btn"
                @click="switchRoute(
                    'task',
                    {
                        pk: this.pk
                    }
                )">
                
                show full
            </material-button>
        </section>

        <h3 class="task-item__title mb-1">
            {{ this.title }}
        </h3>

        <i class="task-item__subtitle mb-1">
            {{ this.subtitle }}
        </i>

        <span 
            class="
                inline-flex
                items-center
                self-start
                gap-2
                mb-2">
            
            <strong class="text-white flex-shrink-0">
                Created Time:
            </strong>
            <time class="task-item__time">{{ this.createdDate }}</time>
        </span>

        <p class="task-item__content mt-3">
            {{ this.text }}
        </p>
    </article>
</template>

<script>
import { minima } from 'minima-fetch.js';

import MaterialButton from './MaterialButton.vue';

export default {
    data() {
        return {};
    },

    inject: [
        'switchRoute'
    ],

    props: {
        title: String,
        subtitle: String,
        text: String,
        pk: String,
        date: String
    },

    emits: [
        'removeTaskInServer',
        'removeLocaleTask'
    ],

    components: {
        MaterialButton
    },

    computed: {
        createdDate() {
            return new Date(this.date).toLocaleString();
        }
    },

    methods: {
        removeTask() {
            this.$emit('removeLocaleTask');
            this.$emit('removeTaskInServer');
        },
    }
};
</script>

<style lang="postcss">
.task-item {
    @apply 
        flex
        flex-col
        items-start;

    position: relative;

    padding: 1em;
    border-radius: 5px;

    background-color: var(--color-gray);
    color: white;
    overflow-wrap: anywhere;
    hyphens: auto;
    text-overflow: ellipsis;

    overflow-x: hidden;
    overflow-y: auto !important;

    @media(max-width: 640px) {
        & {
            &__btns-list {
                @apply mb-5;

                position: static !important;

                align-self: flex-end;
            }
        }
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

        align-self: stretch;

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

    &__time {
        padding: 0 .5em;

        color: white;
        background-color: var(--color-green);
    }

    &__btns-list {
        @apply
            flex
            flex-row
            gap-2;

        position: absolute;
        top: 1em;
        right: 1em;
    }

    &__btn {
        border: {
            right: none !important;
            left: none !important;
        }
        
        background-color: #42b883;

        &:after {
            display: none;
        }

        &:hover {
            border-bottom-color: var(--color-green);

            background-color: transparent;
            color: var(--color-green);
        }
    }
}
</style>
