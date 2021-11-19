<template>
    <article class="authorization">
        <material-title>
            user authorization
        </material-title>

        <transition name="slide-up-right" mode="out-in">
            <notification
                styleType="invalid"
                v-if="authError.status === true">

                {{ authError.error.message }}
            </notification>

            <notification
                styleType="valid"
                v-else-if="requestProcess">

                Login is process, please wait
            </notification>

            <notification
                styleType="valid"
                v-else-if="authIsDone.status === true">

                Authorization is done!
            </notification>
        </transition>

        <form 
            class="authorization__form"
            @click.prevent=""
            @keyup.prevent.enter="checkValid(authorization)">

            <custom-input
                class="authorization__input"
                placeholder="Input your email"
                required
                inputType="email"
                v-model="auth.email"
                :switchVisible="false"
                :class="isInvalidStyle(v$.auth.email.$error)"
                :invalid="v$.auth.email.$error"
                invalidMessage="Email is incorrect">
            </custom-input>

            <custom-input
                placeholder="Input your password"
                class="authorization__input"
                required
                v-model="auth.password"
                :switchVisible="true"
                :class="isInvalidStyle(v$.auth.password.$error)"
                :invalid="v$.auth.password.$error"
                invalidMessage="Password very short or
                                not enough unique">
            </custom-input>

            <material-button 
                class="authorization__btn"
                ref="authBtn"
                @click="checkValid(authorization)">
                authorization
            </material-button>

            <material-link
                @click="switchRoute('registration')">

                You not have account? Go to registration
            </material-link>
        </form>
    </article>
</template>

<script>
import { email, required } from '@vuelidate/validators';
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
            auth: {
                email: '',
                password: ''
            },
            authError: {
                status: false,
                error: null
            },
            authIsDone: {
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

    setup() {
        return {
            v$: useVuelidate()
        };
    },

    validations() {
        return {
            auth: {
                email: {
                    email: email,
                    required: required,
                    $lazy: true
                },
                password: {
                    required: required,
                    $lazy: true
                }
            }
        };
    },

    components: {
        CustomInput,
        MaterialButton,
        MaterialTitle,
        Notification,
        MaterialLink
    },

    mounted() {
        this.$watch(
            () => this.authIsDone.status,
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
        authObject() {
            return JSON.stringify({
                email: this.auth.email,
                password: this.auth.password
            });
        }
    },

    methods: {
        async checkValid(callback) {
            let valid = await this.v$.$validate();

            if (valid === false) {
                this.$refs.authBtn.$el.blur();

                return;
            }

            callback();
        },

        async authorization() {
            this.requestProcess = true;

            try {
                this.authKey = await minima(
                    'https://mtasks.herokuapp.com/auth/login/',
                    {
                        method: 'POST',
                        body: this.authObject,
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        json: true,
                        errorTypes: ['non_field_errors']
                    }
                );

                this.authKey = this.authKey.data.key;
            } catch(err) {
                this.requestProcess = false;

                this.authError.error = err;
                
                this.$refs.authBtn.$el.blur();

                switchThroughTime({
                    target: this.authError,
                    delay: 2500
                });

                return;
            }

            this.requestProcess = false;

            this.$refs.authBtn.$el.blur();

            switchThroughTime({
                target: this.authIsDone,
                delay: 1000
            });
        },

        isInvalidStyle(invalid) {
            let classObject = {
                'input-danger': invalid
            };

            return classObject;
        }
    },
};
</script>

<style lang="postcss">
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
            border-bottom-color: var(--color-green);

            background-color: white;
            color: var(--color-green);
        }
    }
}
</style>
