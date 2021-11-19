<template>
    <article class="container">
        <header is="vue:header"></header>

        <main class="container__main">
            <router-view></router-view>
        </main>
    </article>
</template>

<script>
import { computed } from 'vue';

import Header from './components/Header.vue';

export default {
    data() {
        return {
            authorization: false
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
            logoutAccess: computed(() => {
                return this.authorization;
            }),
            setLogoutAccess: this.setLogoutAccess
        };
    },

    methods: {
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

            console.log(this);

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
        min-h-screen !important;

    position: relative;

    &__main {
        @apply flex flex-col items-center;
    }
}
</style>
