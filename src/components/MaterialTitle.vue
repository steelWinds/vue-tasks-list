<template>
    <h2 class="material-title">
        <slot>
            Title
        </slot>
    </h2>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="postcss">
.material-title {
    @apply mt-2 mb-10;

    color: var(--color-gray);
    text-transform: capitalize;
}
</style>
