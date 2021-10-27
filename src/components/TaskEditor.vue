<template>
    <article 
        class="
            todo-editor">

        <h2 class="todo-editor__title mt-2 mb-10">
            Text Editor
        </h2>
        
        <form 
            class="todo-editor__form">
            
            <section class="flex flex-col w-full sm:w-auto">
                <span
                    v-if="invalids.list.has('titleModel')" 
                    class="mb-2 text-red-900"> 
                    Invalid 
                </span>
                <input 
                    class="w-full sm:w-auto" 
                    :class="checkValid('titleModel', titleModel, 1)"
                    type="text" 
                    placeholder="Input your title"
                    v-model="titleModel"
                    >
            </section>
            <section class="flex flex-col w-full sm:w-auto">
                <span 
                    v-if="invalids.list.has('subtitleModel')"
                    class="mb-2 text-red-900"> 
                    Invalid 
                </span>
                <input 
                    class="w-full sm:w-auto"
                    :class="checkValid('subtitleModel', subtitleModel, 1)" 
                    type="text" 
                    placeholder="Input your subtitle"
                    v-model="subtitleModel">
            </section>
            <section class="flex flex-col w-full">
                <span 
                    v-if="invalids.list.has('contentModel')"
                    class="mb-2 text-red-900"> 
                    Invalid 
                </span>
                <textarea 
                    class="w-full"
                    :class="checkValid('contentModel', contentModel, 1)"
                    name="Text of todo" 
                    placeholder="Input your text"
                    rows="10"
                    v-model="contentModel"
                    @keydown.ctrl.enter.exact="addTask()"
                    @keydown.tab.prevent="tabSize(
                        $event, 'contentModel'
                    )"></textarea>
            </section>

            <material-button
                class="todo-editor__btn"
                @clickEvent="addTask()"
                ref="addBtn">

                add task
            </material-button>
        </form>

        <transition name="slide-up-right">
            <notification
                styleType="valid"
                v-if="taskIsAdd.status === true">

                Task added
            </notification>

            <notification
                styleType="invalid"
                v-else-if="postingError.status === true">
                
                Task not add: Network Error
            </notification>
        </transition>
    </article>
</template>

<script>
import { computed } from 'vue';
import { minima } from '../modules/minima.js';
import { switchThroughTime } from '../modules/switchThroughTime.js';

import MaterialButton from './MaterialButton.vue';
import Notification from './Notification.vue';

export default {
    data() {
        return {
            titleModel: '',
            subtitleModel: '',
            contentModel: '',
            invalids: {
                write: false,
                list: new Map()
            },
            taskIsAdd: {
                status: false
            },
            postingError: {
                status: false,
                error: null
            }
        };
    },

    emits: [
        'switchHeaderPositionType'
    ],

    computed: {
        taskObject() {
            return {
                title: this.titleModel,
                subtitle: this.subtitleModel,
                text: this.contentModel
            };
        }
    },

    components: {
        MaterialButton,
        Notification
    },

    mounted() {
        this.$emit('switchHeaderPositionType', 'static');
    },

    unmounted() {
        this.$emit('switchHeaderPositionType', 'sticky');
    },
    
    methods: {
        tabSize(event, textModel) {
            let target = event.currentTarget;

            let startStr = this[textModel].slice(0, target.selectionStart);
            let endStr = this[textModel].slice(target.selectionEnd);
            let end = target.selectionEnd + 4;

            let resultString = `${startStr}    ${endStr}`;

            this[textModel] = resultString; 

            setTimeout(() => {
                target.setSelectionRange(
                    end, 
                    end
                );
            }, 0);
        },

        checkValid(modelName, model, length) {
            if (model.length <= length) {
                if (this.invalids.write === true) {
                    this.invalids.list.set(modelName, true);
                }

                return {
                    'input-danger': true
                };
            }

            if (this.invalids.write === true) {
                this.invalids.list.delete(modelName);
            }

            return false;
        },

        async addTask() { 
            if (this.checkValid('titleModel', this.titleModel, 1) 
                || this.checkValid('subtitleModel', this.subtitleModel, 1)  
                || this.checkValid('contentModel', this.contentModel, 1)) {
                this.invalids.write = true;

                return;
            }

            this.invalids.write = false;

            let postTask = null;

            try {
                postTask = await minima({
                    url: 'https://mtasks.herokuapp.com/tasks/',
                    method: 'POST',
                    body: JSON.stringify(this.taskObject),
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                });
            } catch(err) {
                this.postingError.error = err;

                this.$refs.addBtn.$el.blur();

                return switchThroughTime({
                    target: this.postingError,
                    delay: 1000
                });
            }

            this.$refs.addBtn.$el.blur();

            switchThroughTime({
                target: this.taskIsAdd,
                delay: 1000
            });
        },
    }
};
</script>

<style>
.todo-editor {
    @apply 
        w-full
        flex
        flex-col
        justify-center
        items-center;

    padding: 0 1em;
    padding-bottom: 1em;

    &__title {
        color: #35495e;
    }

    &__form {
        @apply 
            w-full
            max-w-2xl
            flex
            flex-col
            justify-start
            items-center
            space-y-5;

        & input, textarea {
            transition: all .3s ease-in-out;

            &:active, &:focus {
                outline: none;
                border-radius: 5px !important;
                border-style: dashed;
            }
        }

        & input {
            padding: .7em;
            border: .15em solid #42b883;
        }

        & textarea {
            padding: .7em;
            border: .15em solid #42b883;
        }
    }

    &__btn {
        border: {
            right: none !important;
            left: none !important;
        }
        
        background-color: #42b883;

        &:focus, &:active {
            border-bottom-color: #42b883;

            background-color: white;
            color: #42b883;
        }
    }
}
</style>
