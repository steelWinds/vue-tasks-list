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
        styleType: String
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

<style>
.task-notification {
    @apply 
        w-full;

    position: fixed;
    top: 100px;

    max-width: 300px;
    padding: 1em;
    border-radius: 5px;

    text-align: center;
    background-color: #42b883;
    color: #ffffff;

    z-index: 100;

    @media (max-width: 768px) {
        top: 155px;
    }
}
</style>
