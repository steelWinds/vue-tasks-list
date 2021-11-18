import { helpers } from '@vuelidate/validators';

const password = helpers
    .regex(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/g);

export { password };
