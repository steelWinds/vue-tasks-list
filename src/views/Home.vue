<template>
    <article class="home">
        <h3 class="home__title mt-2 mb-10">
            Hello, if you want use this app, you should registration
            or authorization, if you was have account
        </h3>

        <material-button 
            class="home__btn self-center mb-2"
            @click="switchRoute('registration')">

            Registration
        </material-button>

        <material-button 
            class="home__btn self-center"
            @click="switchRoute('authorization')">

            Authorization
        </material-button>
    </article>
</template>

<script>
import MaterialButton from '../components/MaterialButton.vue';

export default {
    data() {
        return {};
    },

    components: {
        MaterialButton
    },

    inject: [
        'getAuthKey',
        'switchRoute'
    ],
    
    mounted() {
        if (this.getAuthKey() !== null) {
            this.switchRoute('tasks-list');
        }

        this.startMessage = true;
    }
};
</script>

<style lang="postcss">
.home {
    @apply 
        flex
        flex-col
        w-full
        max-w-full !important;

    position: relative;

    &__title {
        text-align: center;
        color: var(--color-gray);
    }

    &__btn {
        width: 100%;
        max-width: 160px;
        border: {
            right: none !important;
            left: none !important;
        }
        
        background-color: var(--color-green);

        &:after {
            content: none !important;
        }

        &:focus, &:active {
            border-bottom-color: var(--color-green);

            background-color: white;
            color: var(--color-green);
        }
    }
}
</style>
