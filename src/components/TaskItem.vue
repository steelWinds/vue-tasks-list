<template>
    <article class="task-item">
        <material-button
            class="task-item__btn"
            @clickEvent="removeTask">
            
            remove
        </material-button>

        <h3 class="task-item__title mb-1">
            {{ this.title }}
        </h3>

        <i class="task-item__subtitle">
            {{ this.subtitle }}
        </i>

        <p class="task-item__content mt-3">
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
        text: String,
    },

    emits: [
        'removeTaskInServer',
        'removeLocaleTask'
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

<style lang="postcss">
.task-item {
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
            border-bottom-color: var(--color-green);

            background-color: transparent;
            color: var(--color-green);
        }
    }
}
</style>
