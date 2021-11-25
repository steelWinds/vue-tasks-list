<template>
    <article class="home">
        <h3 class="home__title mt-2 mb-10">
            Hello, if you want use this app, you should registration
            or authorization, if you was have account
        </h3>

        <section
            class="
                flex 
                justify-center 
                items-center
                gap-2 
                flex-col 
                sm:flex-row">
            
            <material-button 
                class="home__btn self-center"
                @click="switchRoute('registration')">

                Registration
            </material-button>

            <material-button 
                class="home__btn self-center"
                @click="switchRoute('authorization')">

                Authorization
            </material-button>
        </section>
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
};
</script>

<style lang="postcss">
.home {
    @apply 
        flex
        flex-col
        items-center
        w-full
        max-w-full !important;

    position: relative;

    &__title {
        @apply 
            w-full 
            max-w-xl;

        padding: 0 1em;

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
