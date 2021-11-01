<template>
    <label class="custom-input">
        <h4 
            class="custom-input__invalid-message mb-2"
            v-if="invalid === true">
            
            {{ invalidMessage }}
        </h4>

        <section class="custom-input__wrapper">
            <input 
                class="custom-input__input"
                v-model="setModel"
                v-bind="$attrs"
                :class="{'custom-input_input-padding': switchVisible}"
                :type="
                    inputType === 'password' 
                    ? currentInputType
                    : inputType">

            <button
                class="custom-input__btn"
                v-if="switchVisible === true"
                @click="switchInputVisible()">

                <img 
                    alt="Visible password icon"
                    :src="iconSource">    
            </button>
        </section>
    </label>
</template>

<script>
import InvisibleIcon from '../assets/img/invisible.png';
import VisibilityIcon from '../assets/img/visibility.png';

export default {
    data() {
        return {
            visible: false
        };
    },

    props: {
        switchVisible: {
            type: Boolean,
            required: true,
            default: false
        },

        inputType: {
            type: String,
            default: 'password',
        },

        modelValue: {
            type: String,
            default: ''
        },

        invalid: {
            type: Boolean,
            required: true
        },

        invalidMessage: {
            type: String,
            default: 'Input is invalid'
        }
    },

    emits: [
        '@update:modelValue'
    ],

    computed: {
        iconSource() {
            let result = '';

            if (this.visible === true) {
                result = VisibilityIcon;
            } else if (this.visible === false) {
                result = InvisibleIcon;
            }

            return result;
        },

        currentInputType() {
            let result = '';

            if (this.visible === true) {
                result = 'text';
            } else if (this.visible === false) {
                result = 'password';
            } 

            return result;
        },

        setModel: {
            get() {
                return this.modelValue;
            },

            set(newValue) {
                this.$emit('@update:modelValue', newValue);
            }
        }
    },

    methods: {
        switchInputVisible() {
            this.visible = !this.visible;
        }
    }
};
</script>

<style>
.custom-input {
    &_input-padding {
        padding-right: 55px;
    }

    &__wrapper {
        position: relative;
    }

    &__invalid-message {
        color: #d62929;
    }

    &__input {
        @apply 
            w-full;

        padding: .5em;
        border: .15em solid #42b883;

        transition: all .35s ease-in-out;

        &:focus {
            outline: none;
            border-radius: 5px !important;
            border-style: dashed;
        }
    }

    &__btn {
        position: absolute;
        right: 15px;
        top: 50%;

        width: 26px;
        height: 26px;

        transform: translateY(-50%);

        & > img {
            @apply 
                w-full
                h-full;

            display: block;

            opacity: .8;
            object-fit: contain;
        }
    }
}
</style>
