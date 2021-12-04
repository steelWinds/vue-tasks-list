<template>
    <article 
        class="container"
        @scroll.passive="debounceSetCurrentScroll($event)">
        
        <transition name="slide-up">
            <header 
                is="vue:header"
                :style="headerVisible"
                v-if="this.$route.name !== 'task'">
            </header>
        </transition>

        <main class="container__main">
            <router-view v-slot="{ Component, route }">
                <transition name="slide-down" mode="out-in">
                    <keep-alive>
                        <component 
                            :is="Component" 
                            :key="route.name" />
                    </keep-alive>
                </transition>
            </router-view>
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
            currentScroll: 400,
            headerVisible: {
                'opacity': 1
            },
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
            65
        );
    },

    methods: {
        setCurrentScroll(event) {
            if (this.$route.name === 'task-editor') {
                return;
            }

            let targetScrollTop = event.target.scrollTop;

            if (targetScrollTop < this.currentScroll) {
                this.headerVisible['opacity'] = 1;
            } else if (targetScrollTop >= this.currentScroll) {
                this.headerVisible['opacity'] = 0;
            }

            this.currentScroll = targetScrollTop === 0 ? 400 : targetScrollTop;
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
        h-0
        max-w-full 
        min-h-screen !important;

    position: relative;

    overflow-y: auto;

    &__main {
        @apply flex flex-col items-center;
    }
}
</style>
