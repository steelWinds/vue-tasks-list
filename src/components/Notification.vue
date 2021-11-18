<template>
    <article 
        class="task-notification"
        :style="colorPreset">
        
        <h3> 
            <slot>
                Notification
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
        styleType: {
            type: String,
            default: 'valid'
        }
    },

    computed: {
        colorPreset() {
            let styleObject = {
                'background-color': ''
            };

            if (this.styleType === 'invalid') {
                styleObject['background-color'] = '#d62929';
            } else if (this.styleType === 'valid') {
                styleObject['background-color'] = '#42b883';
            }

            return styleObject;
        }
    }
};
</script>

<style lang="postcss">
.task-notification {
    @apply 
        w-full;

    position: fixed;
    top: 100px;

    padding: 1em;
    max-width: 280px;
    border-radius: 5px;

    text-align: center;
    background-color: var(--color-green);
    color: white;

    z-index: 100;

    @media (max-width: 768px) {
        top: 155px;
    }
}
</style>
