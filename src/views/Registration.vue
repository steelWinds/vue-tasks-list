<template>
    <article class="registration">
        <material-title>
            user registration
        </material-title>

        <transition name="slide-up-right">
            <notification
                styleType="invalid"
                v-if="regError.status === true">

                {{ regError.error.message }}
            </notification>

            <notification
                styleType="valid"
                v-else-if="regIsDone.status === true">

                Registration is done!
            </notification>
        </transition>

        <form 
            class="registration__form"
            @click.prevent>

            <custom-input
                class="registration__input"
                placeholder="Input your email"
                required
                :class="isInvalidStyle(v$.reg.email.$invalid)"
                :invalid="v$.reg.email.$invalid"
                invalidMessage="Email is incorrect"
                v-model="reg.email"
                inputType="email"
                :switchVisible="false">
            </custom-input>

            <custom-input
                placeholder="Input your password"
                class="registration__input"
                required
                :class="isInvalidStyle(v$.reg.password.$invalid)"
                :invalid="v$.reg.password.$invalid"
                invalidMessage="Password should 
                                include itself not min 
                                10 symbols"
                v-model="reg.password"
                :switchVisible="true">
            </custom-input>

            <custom-input
                placeholder="Confirm your password"
                class="registration__input"
                required
                :class="isInvalidStyle(v$.reg.confirmPassword.$invalid)"
                :invalid="v$.reg.confirmPassword.$invalid"
                invalidMessage="Password is not same"
                v-model="reg.confirmPassword"
                :switchVisible="false">
            </custom-input>

            <material-button 
                class="registration__btn"
                ref="regBtn"
                :disabled="v$.reg.$invalid"
                @clickEvent="registration()">
                
                Registration
            </material-button>
        </form>
    </article>
</template>

<script>
import { email, required, minLength, sameAs } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import { minima } from 'minima-fetch.js';
import { switchThroughTime } from '../modules/switchThroughTime.js';

import Notification from '../components/Notification.vue';
import CustomInput from '../components/CustomInput.vue';
import MaterialButton from '../components/MaterialButton.vue';
import MaterialTitle from '../components/MaterialTitle.vue';

export default {
    data() {
        return {
            reg: {
                email: '',
                password: '',
                confirmPassword: ''
            },
            regError: {
                status: false,
                error: null
            },
            regIsDone: {
                status: false
            },
            userKey: null
        };
    },

    inject: [
        'setUserKey',
        'switchRoute',
    ],

    components: {
        CustomInput,
        MaterialButton,
        MaterialTitle,
        Notification
    },

    setup() {
        return {
            v$: useVuelidate()
        };
    },

    validations() {
        return {
            reg: {
                email: { 
                    email: email, 
                    required: required
                },
                password: {
                    required: required,
                    minLength: minLength(10)
                },
                confirmPassword: {
                    required: required,
                    sameAsPassword: sameAs(this.reg.password)
                }
            }
        };
    },

    mounted() {
        this.$watch(
            () => this.regIsDone.status,
            (newValue) => {
                if (newValue === true) {
                    setTimeout(() => {
                        this.setUserKey(this.userKey);

                        this.switchRoute('home');
                    }, 1500);
                }
            }
        );
    },

    computed: {
        regObject() {
            return JSON.stringify(
                {
                    email: this.reg.email,
                    password1: this.reg.password,
                    password2: this.reg.confirmPassword
                }
            );
        }
    },

    methods: {
        isInvalidStyle(invalid) {
            let classObject = {
                'input-danger': invalid
            };

            return classObject;
        },

        async registration() {
            try {
                this.userKey = await minima(
                    'https://mtasks.herokuapp.com/auth/registration/',
                    {
                        method: 'POST',
                        body: this.regObject,
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        json: true,
                        errorType: 'email'
                    }
                );
            } catch(err) {
                this.regError.error = err;
                
                this.$refs.regBtn.$el.blur();

                switchThroughTime({
                    target: this.regError,
                    delay: 2500
                });
            }
            
            this.$refs.regBtn.$el.blur();

            switchThroughTime({
                target: this.regIsDone,
                delay: 1000
            });
        }
    }
};
</script>

<style>
.registration {
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
