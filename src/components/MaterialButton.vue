<template>
    <button 
        @click.prevent="$emit('clickEvent')"
        :class="adittClass"
        class="material-button">
        
        <slot>
            Click me
        </slot>
    </button>
</template>

<script>
export default {
    data() {
        return {

        };
    },

    props: {
        adittClass: {
            type: Object,
            default: null
        }
    },

    emits: [
        'clickEvent'
    ],
};
</script>

<style>
.material-button {
    position: relative;

    padding: .3em 1em;
    border: .15em solid transparent;
    border-right: none;

    background-color: #35495e;
    text-transform: uppercase;
    font-weight: 300;
    color: white;

    transition: all .3s ease-in-out;

    &:nth-child(even) {
        border-left: none;
        border-right: .15em solid transparent;
    }

    &:not(:last-child):after {
            position: absolute;
            right: 0;
            top: -0.15em;

            content: '';

            height: calc(100% + 0.30em);
            width: 2px;

            background-color: white;
    }

    &_active {
        background-color: #42b883;
        border: {
            top: .15em solid white;
            bottom: .15em solid white;
        };

        z-index: 10;

        &:first-child {
            border-left: .15em solid white;
        }

        &:last-child {
            border-right: .15em solid white;
        }
    }
}
</style>
