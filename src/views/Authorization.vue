<template>
    <article class="authorization">
        <material-title>
            user authorization
        </material-title>

        <form 
            class="authorization__form"
            @click.prevent>

            <custom-input
                class="authorization__input"
                placeholder="Input your email"
                inputType="email"
                :switchVisible="false">
            </custom-input>

            <custom-input
                placeholder="Input your password"
                class="authorization__input"
                :switchVisible="true">
            </custom-input>

            <material-button 
                class="authorization__btn">
                authorization
            </material-button>
        </form>
    </article>
</template>

<script>
import CustomInput from '../components/CustomInput.vue';
import MaterialButton from '../components/MaterialButton.vue';
import MaterialTitle from '../components/MaterialTitle.vue';

export default {
    data() {
        return {};
    },

    components: {
        CustomInput,
        MaterialButton,
        MaterialTitle
    }
};
</script>

<style>
.authorization {
    @apply
        w-full
        flex
        flex-col
        items-center;

    padding: 0 1em;

    &__form {
        @apply 
            flex
            flex-col
            items-center
            w-full
            max-w-sm
            gap-3;
    }

    &__input {
        @apply 
            w-full;
    }

    &__btn {
        @apply 
            w-max;

        border: {
            right: none !important;
            left: none !important;
        }
        
        background-color: #42b883;

        &:focus, &:active {
            border-bottom-color: #42b883;

            background-color: white;
            color: #42b883;
        }
    }
}
</style>
