<template>
    <article 
        class="task-editor">

        <material-title class="self-center">
            Text Editor
        </material-title>

        <transition name="slide-up-right">
            <notification
                styleType="valid"
                v-if="taskIsAdd.status === true">

                Task added
            </notification>
            
            <notification
                styleType="valid"
                v-else-if="requestProcess">

                Add task is process, please wait
            </notification>

            <notification
                styleType="invalid"
                v-else-if="postingError.status === true">
                
                {{ postingError.error.message }}
            </notification>
        </transition>
        
        <form 
            class="task-editor__form"
            @click.prevent
            @keyup.prevent.enter="addTask()">
            
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
                    name="Text of task" 
                    placeholder="Input your text"
                    rows="10"
                    v-model="contentModel"
                    @keydown.tab.prevent="tabSize(
                        $event, 'contentModel'
                    )"></textarea>
            </section>

            <material-button
                class="task-editor__btn"
                @clickEvent="addTask()"
                ref="addBtn">

                add task
            </material-button>
        </form>
    </article>
</template>

<script>
import { computed } from 'vue';
import { minima } from 'minima-fetch.js';
import { switchThroughTime } from '../modules/switchThroughTime.js';

import MaterialButton from '../components/MaterialButton.vue';
import MaterialTitle from '../components/MaterialTitle.vue';
import Notification from '../components/Notification.vue';

export default {
    data() {
        return {
            titleModel: '',
            subtitleModel: '',
            contentModel: '',
            requestProcess: false,
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

    inject: [
        'getAuthKey'
    ],

    components: {
        MaterialButton,
        MaterialTitle,
        Notification
    },

    computed: {
        taskObject() {
            return {
                title: this.titleModel,
                subtitle: this.subtitleModel,
                text: this.contentModel
            };
        }
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
            this.requestProcess = true;

            if (this.checkValid('titleModel', this.titleModel, 1) 
                || this.checkValid('subtitleModel', this.subtitleModel, 1)  
                || this.checkValid('contentModel', this.contentModel, 1)) {
                this.invalids.write = true;

                return;
            }

            this.invalids.write = false;

            let postTask = null;

            try {
                postTask = await minima(
                    'https://mtasks.herokuapp.com/tasks/',
                    {
                        method: 'POST',
                        body: JSON.stringify(this.taskObject),
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8',
                            Authorization: `Token ${this.getAuthKey()}`
                        }
                    }
                );
            } catch(err) {
                this.requestProcess = false;

                this.postingError.error = err;

                this.$refs.addBtn.$el.blur();

                return switchThroughTime({
                    target: this.postingError,
                    delay: 1000
                });
            }

            this.requestProcess = false;

            this.$refs.addBtn.$el.blur();

            switchThroughTime({
                target: this.taskIsAdd,
                delay: 1000
            });
        },
    }
};
</script>

<style lang="postcss">
.task-editor {
    @apply 
        w-full
        flex
        flex-col
        justify-center
        items-center;

    padding: 0 1em;
    padding-bottom: 1em;

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

            &:focus {
                outline: none;
                border-radius: 5px !important;
                border-style: dashed;
            }
        }

        & input {
            padding: .7em;
            border: .15em solid var(--color-green);
        }

        & textarea {
            padding: .7em;
            border: .15em solid var(--color-green);
        }
    }

    &__btn {
        border: {
            right: none !important;
            left: none !important;
        }
        
        background-color: var(--color-green);

        &:focus, &:active {
            border-bottom-color: var(--color-green);

            background-color: white;
            color: var(--color-green);
        }
    }
}
</style>
