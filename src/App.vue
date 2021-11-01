<template>
    <article class="container">
        <header is="vue:header"></header>

        <main class="container__main">
            <router-view></router-view>
        </main>
    </article>
</template>

<script>
import Header from './components/Header.vue';

export default {
    data() {
        return {};
    },

    components: {
        Header,
    },

    provide() {
        return {
            getUserKey: this.getUserKey,
            setUserKey: this.setUserKey,
            switchRoute: this.switchRoute
        };
    },

    methods: {
        getUserKey() {
            return window.localStorage.getItem('user-key');
        },

        setUserKey(key) {
            window.localStorage.setItem('user-key', key);
        },

        switchRoute(routeName) {
            this.startMessage = false;
            
            this.$router.push({
                name: routeName
            });
        }
    }
};
</script>

<style>
.container {
    @apply 
        w-full
        h-full
        max-w-full
        min-h-screen !important;

    position: relative;
}
</style>
