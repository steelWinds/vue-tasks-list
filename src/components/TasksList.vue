<template>
    <article class="todo-list">
        <h2 class="todo-list__title mt-2 mb-10">Tasks List</h2>

        <transition name="slide-up-right">
            <notification 
                class="self-center"
                styleType="valid"
                v-if="taskIsRemoved.status === true">

                Task: {{ this.taskIsRemoved.taskTitle }} is removed
            </notification>

            <notification 
                class="self-center"
                styleType="invalid"
                v-else-if="removingError.status === true">

                Task not will remove on server: Network Error
            </notification>
        </transition>

        <transition 
            name="slide-down" 
            mode="out-in" 
            appear
            >
            
            <message
                class="self-center"
                styleType="invalid"
                v-if="loadingError.status === true">

                Load error, check your network
            </message>

            <message
                class="self-center"
                styleType="valid"
                v-else-if="tasksList.length === 0">
                
                No Tasks, please add them
            </message>

            <preloader
                class="todo-list__preloader self-center"
                v-else-if="tasksList.length === null">
            </preloader>

            <section 
                class="todo-list__items"
                v-else>
                
                <transition-group 
                    name="slide-left">
                    
                    <task-item
                        v-for="(task, index) of tasksList"
                        v-bind="task"
                        :key="task"    
                        @removeTaskInServer="removeTask(task.pk)"
                        @removeLocaleTask="
                            removeLocaleTask(index, task.title)">
                    </task-item>
                </transition-group>
            </section>
        </transition>
    </article>
</template>

<script>
import { minima } from '../modules/minima.js';
import ScrollReveal from 'scrollreveal';
import { blockCall } from '../modules/blockCall.js';
import { switchThroughTime } from '../modules/switchThroughTime.js';
import { cutByLength } from '../modules/cutByLength.js';

import TaskItem from './TaskItem.vue';
import Preloader from './Preloader.vue';
import Message from './Message.vue';
import Notification from './Notification.vue';

export default {
    data() {
        return {
            taskIsRemoved: {
                status: false,
                taskTitle: '',
            },
            tasksList: {
                length: null
            },
            loadingError: {
                status: false,
                error: null
            },
            removingError: {
                status: false,
                error: null
            }
        };
    },

    components: {
        TaskItem,
        Preloader,
        Message,
        Notification
    },

    mounted() {
        this.getTasksList();
    },

    methods: {
        async removeTask(key) {
            try {
                let deleteTask = await minima({
                    url: `https://mtasks.herokuapp.com/tasks/${key}/`,
                    method: 'DELETE'
                });    
            } catch(err) {
                this.removingError.error = err;

                switchThroughTime({
                    target: this.removingError,
                    delay: 3000
                });
            }
        },

        removeLocaleTask(index, title) {
            this.tasksList.splice(index, 1);

            this.taskIsRemoved.taskTitle = cutByLength(title, 10);

            switchThroughTime({
                target: this.taskIsRemoved,
                delay: 1000
            });
        },

        async getTasksList() {
            let tasksList = null;

            try {
                tasksList = await minima({
                    url: 'https://mtasks.herokuapp.com/tasks/',
                    json: true
                }); 
            } catch(err) {
                this.loadingError = {
                    status: true,
                    error: err
                };

                return;
            }

            this.tasksList = tasksList;
        },

        addRevealOnList(sync) {
            if (sync === true) {
                return ScrollReveal().sync();
            }

            ScrollReveal({
                duration: 350,
                distance: '30px',
                opacity: .5,
                scale: .9,
            }).reveal('.todo-item');
        }
            
    }
};
</script>

<style>
.todo-list {
    @apply 
        flex
        flex-col
        h-full
        min-h-screen;
    
    position: relative;

    padding: 0 1em;
    padding-bottom: 1em;

    &__title {
        align-self: center;
        color: #35495e;
    }

    &__items {
        @apply space-y-4;

        position: relative;
    }
}
</style>
