<template>
    <header 
        class="
            header
            w-full"
        :style="positionType"> 

        <h1 class="header__title">
            <a @click.prevent="switchRoute('home')">
                Vue style
            </a>
        </h1>

        <section class="header__switch-btns">
            <material-button
                @clickEvent="switchCurrentRoute('tasks-list')"
                :adittClass="isActive('tasks-list')">

                list
            </material-button>
            
            <material-button
                @clickEvent="switchCurrentRoute('task-editor')"
                :adittClass="isActive('task-editor')">
                
                write
            </material-button>
        </section>
    </header>

    
</template>

<script>
import MaterialButton from './MaterialButton.vue';

export default {
    data() {
        return {
            currentRoute: 'tasks-list'
        };
    },

    inject: [
        'switchRoute'
    ],

    components: {
        MaterialButton
    },

    computed: {
        positionType() {
            let styleObject = {
                'top': ''
            };

            if (this.currentRoute === 'task-editor') {
                styleObject['top'] = 'auto';
            } else if (this.currentRoute === 'tasks-list') {
                styleObject['top'] = '0';
            }

            return styleObject;
        }
    },

    methods: {
        isActive(routeName) {
            let styleObject = {
                ['material-button_active']: false
            };

            if (this.currentRoute === routeName) {
                styleObject['material-button_active'] = true;

                return styleObject;
            }

            return styleObject;
        },

        switchCurrentRoute(routeName) {
            this.switchRoute(routeName);

            this.currentRoute = routeName;
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

        cursor: pointer;
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
