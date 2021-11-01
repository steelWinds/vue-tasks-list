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
        'getUserKey',
        'switchRoute'
    ],
    
    mounted() {
        if (this.getUserKey() !== null) {
            this.switchRoute('tasks-list');
        }

        this.startMessage = true;
    }
};
</script>

<style>
.home {
    @apply 
        flex
        flex-col
        w-full
        max-w-full !important;

    position: relative;

    &__title {
        text-align: center;
    }

    &__btn {
        width: 100%;
        max-width: 160px;
        border: {
            right: none !important;
            left: none !important;
        }
        
        background-color: #42b883;

        &:after {
            content: none !important;
        }

        &:focus, &:active {
            border-bottom-color: #42b883;

            background-color: white;
            color: #42b883;
        }
    }
}
</style>
