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

<style>
.material-title {
    @apply mt-2 mb-10;

    color: #35495e;
    text-transform: capitalize;
}
</style>
