<template>
    <article 
        class="container"
        @scroll.passive="debounceSetCurrentScroll($event)">
        
        <transition name="slide-up">
            <header 
                is="vue:header"
                v-if="this.$route.name !== 'task' && currentScroll < 200">
            </header>
        </transition>

        <main class="container__main">
            <router-view></router-view>
        </main>
    </article>
</template>

<script>
import { computed } from 'vue';
import { debounce } from 'lodash';

import Header from './components/Header.vue';

export default {
    data() {
        return {
            authorization: false,
            currentScroll: 0
        };
    },

    components: {
        Header,
    },

    provide() {
        return {
            getAuthKey: this.getAuthKey,
            setAuthKey: this.setAuthKey,
            switchRoute: this.switchRoute,
            removeAuthKey: this.removeAuthKey,
            currentTasksListScroll: computed(() => {
                return this.currentTasksListScroll;
            }), 
            logoutAccess: computed(() => {
                return this.authorization;
            }),
            setLogoutAccess: this.setLogoutAccess
        };
    },

    created() {
        this.debounceSetCurrentScroll = debounce(
            this.setCurrentScroll,
            100
        );
    },

    methods: {
        setCurrentScroll(event) {
            let scroll = event.target.scrollTop;

            if (this.$route.name === 'task-editor') {
                this.currentScroll = 0;

                return;
            }

            this.currentScroll = scroll;
        },

        getAuthKey() {
            return window.localStorage.getItem('auth-key');
        },

        setAuthKey(key) {
            window.localStorage.setItem('auth-key', key);
        },

        removeAuthKey() {
            window.localStorage.removeItem('auth-key');
        },

        setLogoutAccess(value) {
            this.authorization = value;
        },

        switchRoute(name, params = {}) {
            let routeObject = {
                params: params,
                replace: true
            };

            let nameToArray = name.split('');

            if (nameToArray.includes('/')) {
                routeObject.path = name;
            } else {
                routeObject.name = name;
            }

            this.$router.push(routeObject);
        }
    }
};
</script>

<style lang="postcss">
.container {
    @apply 
        w-full
        h-full
        max-w-full
        max-h-screen !important;

    position: relative;

    overflow-y: auto;

    &__main {
        @apply flex flex-col items-center;
    }
}
</style>
