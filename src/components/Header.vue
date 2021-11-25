<template>
    <header 
        class="
            header
            w-full"
        :style="positionType"> 

        <h1 class="header__title">
            <a @click.prevent="switchCurrentRoute('tasks-list')">
                Vue style
            </a>
        </h1>

        <section
            v-if="logoutAccess" 
            class="
                flex
                flex-col 
                md:flex-row 
                md:flex-wrap 
                items-center
                md:justify-end">
           
            <section 
                class="header__switch-btns flex-shrink-0">
                
                <material-button
                    @click="switchCurrentRoute('tasks-list')"
                    :adittClass="isActive('tasks-list')">

                    list
                </material-button>
                
                <material-button
                    @click="switchCurrentRoute('task-editor')"
                    :adittClass="isActive('task-editor')">
                    
                    write
                </material-button>
            </section>

            <material-button
                class="mt-5 md:ml-10 md:mt-0 header__logoutBtn"
                v-if="logoutAccess === true"
                @click="logout()">
                
                logout
            </material-button>
        </section>
    </header>

    
</template>

<script>
import { checkAuthKey } from '../modules/checkAuthKey.js';

import MaterialButton from './MaterialButton.vue';

export default {
    data() {
        return {
            defaultRoute: 'tasks-list',
        };
    },

    inject: [
        'switchRoute',
        'logoutAccess',
        'removeAuthKey',
        'setLogoutAccess',
    ],

    components: {
        MaterialButton
    },

    created() {
        this.setLogoutAccess(checkAuthKey('auth-key', true));
    },

    computed: {
        positionType() {
            let styleObject = {
                'top': ''
            };

            if (this.currentRouteName === 'task-editor') {
                styleObject['top'] = 'auto';
            } else if (this.currentRouteName === 'tasks-list') {
                styleObject['top'] = '0';
            }

            if (this.logoutAccess === false) {
                styleObject['justify-content'] = 'center';
            }

            return styleObject;
        },

        currentRouteName() {
            if (this.$router.currentRoute.value.name) {
                return this.$router.currentRoute.value.name;
            }

            return this.defaultRoute;
        }
    },

    methods: {
        isActive(routeName) {
            let styleObject = {
                ['material-button_active']: false
            };

            if (this.currentRouteName === routeName) {
                styleObject['material-button_active'] = true;

                return styleObject;
            }

            return styleObject;
        },

        switchCurrentRoute(routeName) {
            this.switchRoute(routeName);

            this.currentRoute = routeName;
        },

        logout() {
            this.removeAuthKey();

            this.setLogoutAccess(false);

            this.switchRoute('home');
        },
    },
};
</script>

<style lang="postcss">
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

    background-color: var(--color-green);
    text-align: center;
    color: white;

    z-index: 100;
    
    &__title {
        text-transform: capitalize;

        cursor: pointer;
    }

    &__switch-btns {
        display: flex;
        width: 250px;
        
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

    &__logoutBtn {
        border: .1em solid transparent !important;
        background-color: var(--color-gray);

        &:hover, &:active {
            border-color: white !important;

            background-color: var(--color-green);
        }
    }
}
</style>
