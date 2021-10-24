<template>
    <article 
        class="error-message"
        :style="colorPreset">
        
        <h3>
            <slot>
                Error
            </slot>
        </h3>
    </article>
</template>

<script>
export default {
    data() {
        return {};
    },

    props: {
        styleType: String
    },

    computed: {
        colorPreset() {
            let styleObject = {
                'background-color': ''
            };

            if (this.styleType === 'valid') {
                styleObject['background-color'] = '#42b883';
            } else if (this.styleType === 'invalid') {
                styleObject['background-color'] = '#d62929';
            }

            return styleObject;
        }
    }
};
</script>

<style>
.error-message {
    @apply 
        w-full
        max-w-sm; 

    padding: .5em 1.5em;
    border-color: #d62929 !important; 

    color: white;
    text-align: center;
    background-color: #d62929; 
}
</style>
