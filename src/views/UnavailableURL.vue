<template>
    <message 
        class="url-error mt-10 mb-5"
        styleType="invalid">
        
        404 Error, that page not found
    </message>

    <material-button 
        class="url-error__btn"
        @click="switchRoute('home')">
        
        go to home page
    </material-button>
</template>

<script>
import MaterialButton from '../components/MaterialButton.vue';
import Message from '../components/Message.vue';

export default {
    data() {
        return {};
    },

    inject: [
        'switchRoute'
    ],
    
    components: {
        MaterialButton,
        Message
    }
};
</script>

<style lang="postcss">
.url-error {
    &__btn {
        border: {
            right: none !important;
            left: none !important;
        }
        
        background-color: var(--color-red);

        &:hover {
            border-bottom-color: var(--color-green);

            background-color: white;
            color: var(--color-green);
        }
    }
}
</style>
