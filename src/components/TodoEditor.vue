<template>
    <article 
        class="
            todo-editor">

        <h2 class="todo-editor__title mt-2 mb-10">
            Text Editor
        </h2>
        
        <form 
            class="todo-editor__form">
            
            <input 
                class="w-full sm:w-auto" 
                :class="titleValid"
                type="text" 
                placeholder="Input your title"
                v-model="titleModel">
            <input 
                class="w-full sm:w-auto"
                :class="subtitleValid" 
                type="text" 
                placeholder="Input your subtitle"
                v-model="subtitleModel">
            <textarea 
                class="w-full"
                :class="contentValid"
                name="Text of todo" 
                placeholder="Input your text"
                rows="10"
                v-model="contentModel"
                @keydown.tab.prevent="tabSize(
                    $event, 'contentModel'
                )"></textarea>

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
            contentModel: ''
        };
    },

    inject: [
        'tasksList'
    ],

    components: {
        MaterialButton
    },

    computed: {
        titleValid() {
            if (this.titleModel.length < 15) {
                return {
                    'input-danger': true
                };
            }

            return false;
        },

        subtitleValid() {
            if (this.subtitleModel.length < 10) {
                return {
                    'input-danger': true
                };
            }

            return false;
        },
        
        contentValid() {
            if (this.contentModel.length < 15) {
                return {
                    'input-danger': true
                };
            }

            return false;
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

        isInvalid(value, target, length) {
            let setClass = false;

            if (value < length) {
                setClass = true;
            }

            return {
                'input-danger': setClass
            };
        },

        addTask() {
            if (this.titleValid || this.subtitleValid || this.contentValid) {

                return;
            }

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

        &:hover, &:active, &:focus {
            border-bottom-color: #42b883;

            background-color: white;
            color: #42b883;
        }
    }
}
</style>
