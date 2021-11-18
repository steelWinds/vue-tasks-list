<template>
    <router-link
        class="material-link"
        v-bind="$attrs"
        to="">

        <slot></slot>
    </router-link>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="postcss">
.material-link {
    color: var(--colo-gray);
}
</style>
