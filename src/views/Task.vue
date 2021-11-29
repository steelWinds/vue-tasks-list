<template>
    <article class="task">
        <transition name="slide-down" mode="out-in">
            <preloader
                class="task__preloader"
                v-if="currentTask === null">
            </preloader>

            <section 
                class="
                    flex
                    flex-col
                    items-start"
                v-else>
                
                <material-button
                    class="task__btn"
                    @click="switchRoute('home')">
                    
                    Back
                </material-button>

                <material-title class="task__title mb-3">
                    {{ this.currentTask.title }}
                </material-title>

                <i class="task__subtitle mb-3">
                    {{ this.currentTask.subtitle }}
                </i>

                <span 
                    class="
                        inline-flex
                        items-center
                        self-start
                        gap-2
                        mb-6">
                    
                    <strong class="flex-shrink-0">
                        Created Time:
                    </strong>
                    <time class="task-item__time">{{ this.createdDate }}</time>
                </span>

                <p class="task__text">
                    {{ this.currentTask.text }}
                </p>
            </section>
        </transition>
    </article>
</template>

<script>
import { minima } from 'minima-fetch.js';

import Preloader from '../components/Preloader.vue';
import MaterialButton from '../components/MaterialButton.vue';
import MaterialTitle from '../components/MaterialTitle.vue';

export default {
    data() {
        return {
            currentTask: null
        };
    },

    inject: [
        'getAuthKey',
        'switchRoute'
    ],

    props: {
        pk: {
            required: true,
            type: String,
            default: ''
        }
    },

    components: {
        MaterialButton,
        MaterialTitle,
        Preloader
    },

    computed: {
        createdDate() {
            return new Date(this.currentTask.pub_datetime).toLocaleString();
        }
    },

    methods: {
        async loadTask() {
            let task;

            try {
                task = await minima(
                    `https://mtasks.herokuapp.com/tasks/${this.pk}`,
                    {
                        headers: {
                            'Authorization': `Token ${this.getAuthKey()}`
                        },
                        json: true
                    });
            } catch(err) {
                return err;
            }

            return task.data;
        },

        setTask(value) {
            this.currentTask = value;
        }
    },

    beforeRouteEnter(to, from, next) {
        next(async vm => {
            let task = await vm.loadTask();

            vm.setTask(task);
        });
    },

    async beforeRouteUpdate() {
        let task = await this.loadTask();
        
        this.currentTask = task;
    }
};
</script>

<style lang="postcss">
.task {
    @apply 
        w-full
        flex
        flex-col;

    position: relative;

    padding: 0 1em;

    overflow-wrap: anywhere;
    hyphens: auto;

    &__preloader {
        position: fixed;
        top: 20%;
        left: 50%;

        transform: translateX(-50%);
        z-index: 1000;
    }

    &__title {
        @apply 
            w-full
            max-w-4xl;
    }

    &__subtitle {
        @apply
            w-full
            max-w-xl;

        line-height: 1rem;
    }

    &__time {
        padding: 0 .5em;

        color: white;
        background-color: var(--color-green);
    }

    &__text {
        white-space: pre-wrap;
    }

    &__btn {
        position: absolute;
        top: .5rem;
        right: 1em;

        width: 100%;
        max-width: 90px;
        border: {
            right: none !important;
            left: none !important;
        }
        
        background-color: var(--color-green);

        @media (max-width: 764px) {
            & {
                @apply 
                    mt-2
                    mb-5
                    self-end;

                position: static;
            }
        }

        &:after {
            content: none !important;
        }

        &:focus, &:active {
            border-bottom-color: var(--color-green);

            background-color: white;
            color: var(--color-green);
        }
    }
}
</style>
