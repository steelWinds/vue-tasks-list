<template>
    <header 
        class="
            header
            w-full"
        :style="positionType"> 

        <h1 class="header__title">
            <a href="./index.html">
                Vue style
            </a>
        </h1>

        <section 
            class="
                header__switch-btns">
            
            <material-button
                @clickEvent="switchComponent(this.components.todoList)"
                :adittClass="checkActive(this.components.todoList)">

                list
            </material-button>
            
            <material-button
                @clickEvent="switchComponent(this.components.todoEditor)"
                :adittClass="checkActive(this.components.todoEditor)">
                
                write
            </material-button>
        </section>
    </header>

    
</template>

<script>
import MaterialButton from './MaterialButton.vue';

export default {
    data() {
        return {};
    },

    components: {
        MaterialButton
    },

    inject: [
        'components', 
        'currentComponent',
        'switchComponent'
    ],

    methods: {
        checkActive(component) {
            let result = this.currentComponent === component;

            return {
                ['material-button_active']: result
            };
        },
    },

    computed: {
        positionType() {
            let styleObject = {
                'position': ''
            };

            if (this.currentComponent === this.components.todoEditor) {
                styleObject['position'] = 'static';
            } else if (this.currentComponent === this.components.todoList) {
                styleObject['position'] = 'sticky';
            }

            return styleObject;
        }
    }
};
</script>

<style>
.header {
    @apply 
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-5;

    position: sticky;
    top: 0;
    left: 0;

    padding: 1em 2em;

    background-color: #42b883;
    text-align: center;
    color: white;

    z-index: 100;

    &__title {
        text-transform: capitalize;
    }

    &__switch-btns {
        display: flex;
        width: 100%;
        max-width: 250px;
        
        & > * {
            flex: 1 0 50%;

            &:first-child {
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            }

            &:last-child {
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }

    }
}
</style>
