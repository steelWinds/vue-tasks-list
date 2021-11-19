<template>
    <article class="registration">
        <material-title>
            user registration
        </material-title>

        <transition name="slide-up-right" mode="out-in">
            <notification
                styleType="invalid"
                v-if="regError.status === true">

                {{ regError.error.message }}
            </notification>

            <notification
                styleType="valid"
                v-else-if="requestProcess">

                Registration is process, please wait
            </notification>

            <notification
                styleType="valid"
                v-else-if="regIsDone.status === true">

                Registration is done!
            </notification>
        </transition>

        <form 
            class="registration__form"
            @click.prevent
            @keyup.prevent.enter="checkValid(registration)">

            <custom-input
                class="registration__input"
                placeholder="Input your email"
                required
                :class="isInvalidStyle(v$.reg.email.$error)"
                :invalid="v$.reg.email.$error"
                invalidMessage="Email is incorrect"
                v-model="reg.email"
                inputType="email"
                :switchVisible="false">
            </custom-input>

            <custom-input
                placeholder="Input your password"
                class="registration__input"
                required
                :class="isInvalidStyle(v$.reg.password.$error)"
                :invalid="v$.reg.password.$error"
                invalidMessage="Password very short or
                                not enough unique"
                v-model="reg.password"
                :switchVisible="true">
            </custom-input>

            <custom-input
                placeholder="Confirm your password"
                class="registration__input"
                required
                :class="isInvalidStyle(v$.reg.confirmPassword.$error)"
                :invalid="v$.reg.confirmPassword.$error"
                invalidMessage="Password is not same"
                v-model="reg.confirmPassword"
                :switchVisible="true">
            </custom-input>

            <material-button 
                class="registration__btn"
                ref="regBtn"
                @click="checkValid(registration)">
                
                Registration
            </material-button>

            <material-link
                @click="switchRoute('authorization')">

                Are you register? Go login
            </material-link>
        </form>
    </article>
</template>

<script>
import { email, required, minLength, sameAs } from '@vuelidate/validators';
import { password } from '../validators/password.js';
import { useVuelidate } from '@vuelidate/core';
import { minima } from 'minima-fetch.js';
import { switchThroughTime } from '../modules/switchThroughTime.js';

import MaterialLink from '../components/MaterialLink.vue';
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
            authKey: null,
            requestProcess: false
        };
    },

    inject: [
        'setAuthKey',
        'switchRoute',
        'logoutAccess',
        'setLogoutAccess'
    ],

    components: {
        CustomInput,
        MaterialButton,
        MaterialTitle,
        Notification,
        MaterialLink
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
                    required: required,
                    $lazy: true
                },
                password: {
                    required: required,
                    minLength: minLength(10),
                    password: password,
                    $lazy: true
                },
                confirmPassword: {
                    required: required,
                    sameAsPassword: sameAs(this.reg.password),
                    $lazy: true
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
                        this.setAuthKey(this.authKey);

                        this.switchRoute('home');

                        this.setLogoutAccess(true);
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

        async checkValid(callback) {
            let valid = await this.v$.$validate();

            if (valid === false) {
                this.$refs.regBtn.$el.blur();

                return;
            }

            callback();
        },

        async registration() {
            this.requestProcess = true;

            try {
                this.authKey = await minima(
                    'https://mtasks.herokuapp.com/auth/registration/',
                    {
                        method: 'POST',
                        body: this.regObject,
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        json: true,
                        errorTypes: ['email', 'non_field_errors']
                    }
                );

                this.authKey = this.authKey.data.key;
            } catch(err) {
                this.requestProcess = false;

                this.regError.error = err;
                
                this.$refs.regBtn.$el.blur();

                console.log(err);

                switchThroughTime({
                    target: this.regError,
                    delay: 2500
                });

                return;
            }

            this.requestProcess = false;
            
            this.$refs.regBtn.$el.blur();

            switchThroughTime({
                target: this.regIsDone,
                delay: 1000
            });
        }
    }
};
</script>

<style lang="postcss">
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
        
        background-color: var(--color-green);

        &:focus, &:active {
            border-bottom-color: var(--color-green);

            background-color: white;
            color: var(--color-green);
        }
    }
}
</style>
