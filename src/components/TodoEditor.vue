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
                    @keydown.tab.prevent="tabSize(
                        $event, 'contentModel'
                    )"></textarea>
            </section>

            <material-button
                class="todo-editor__btn"
                @clickEvent="addTask()">
                <template #content>
                    add task
                </template>
            </material-button>
        </form>
    </article>
</template>

<script>
import MaterialButton from './MaterialButton.vue';

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
            
        };
    },

    inject: [
        'tasksList'
    ],

    components: {
        MaterialButton
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

        addTask() { 
            if (this.checkValid('titleModel', this.titleModel, 1) 
                || this.checkValid('subtitleModel', this.subtitleModel, 1)  
                || this.checkValid('contentModel', this.contentModel, 1)) {
                this.invalids.write = true;

                return;
            }

            this.invalids.write = false;

            let currentLengthList = this.tasksList.value.size; 

            this.tasksList.value.set(
                currentLengthList + 1,
                {
                    title: this.titleModel,
                    subtitle: this.subtitleModel,
                    content: this.contentModel  
                }
            );
        }
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
                border-radius: 6px !important;
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

        &:hover, &:active {
            border-bottom-color: #42b883;

            background-color: white;
            color: #42b883;
        }
    }
}
</style>
