<template>
    <article class="tasks-list">
        <material-title class="self-center">
            tasks list
        </material-title>

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

                Task not will remove on server: 
                {{ removingError.error.message }}
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

                Load error: {{ loadingError.error.message }}
            </message>

            <message
                class="self-center"
                styleType="valid"
                v-else-if="tasksList.length === 0">
                
                No Tasks, please add them
            </message>

            <preloader
                class="self-center"
                v-else-if="tasksList.length === null">
            </preloader>

            <section 
                class="tasks-list__items"
                v-else>
                
                <transition-group 
                    name="slide-left">
                    
                    <task-item
                        v-for="(task, index) of tasksList"
                        :title="task.title"
                        :subtitle="task.subtitle"
                        :text="task.text"
                        :pk="task.pk"
                        :date="task.pub_datetime"
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
import { minima } from 'minima-fetch.js';
import { blockCall } from '../modules/blockCall.js';
import { switchThroughTime } from '../modules/switchThroughTime.js';
import { cutByLength } from '../modules/cutByLength.js';

import TaskItem from '../components/TaskItem.vue';
import Preloader from '../components/Preloader.vue';
import Message from '../components/Message.vue';
import Notification from '../components/Notification.vue';
import MaterialTitle from '../components/MaterialTitle.vue';

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

    inject: [
        'getAuthKey'
    ],

    components: {
        TaskItem,
        Preloader,
        Message,
        Notification,
        MaterialTitle
    },

    created() {
        this.getTasksList();
    },

    methods: {
        async removeTask(key) {
            try {
                let deleteTask = await minima(
                    `https://mtasks.herokuapp.com/tasks/${key}/`,
                    {
                        method: 'DELETE',
                        headers: {
                            Authorization: `Token ${this.getAuthKey()}`
                        }
                    }
                );    
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
                tasksList = await minima(
                    'https://mtasks.herokuapp.com/tasks/',
                    {
                        json: true,
                        headers: {
                            Authorization: `Token ${this.getAuthKey()}`
                        }
                    }
                ); 
            } catch(err) {
                return this.loadingError = {
                    status: true,
                    error: err
                };
            }

            this.tasksList = tasksList.data;

            console.log(this.tasksList);
        },

        // TODO: add scrollReveal

        //addRevealOnList(sync) {
        //    if (sync === true) {
        //        return ScrollReveal().sync();
        //    }

        //    ScrollReveal({
        //        duration: 350,
        //        distance: '30px',
        //        opacity: .5,
        //        scale: .9,
        //    }).reveal('.todo-item');
        //}
            
    }
};
</script>

<style lang="postcss">
.tasks-list {
    @apply 
        flex
        flex-col
        w-full
        h-full
        min-h-screen;
    
    position: relative;

    padding: 0 1em;
    padding-bottom: 1em;

    &__items {
        @apply space-y-4;

        position: relative;
    }
}
</style>
