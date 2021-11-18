<template>
    <article class="preloader">
        <div class="preloader__box"></div>
    </article>
</template>

<script>
export default {
    data() {
        return {};
    }
};  
</script>

<style lang="postcss">
@keyframes bubble {
    from {
        transform: scale(1);
    }

    50% {
        transform: scale(.3)
    }

    to {
        transform: scale(1);
    }
}

.preloader {
    @apply 
        flex
        justify-center
        items-center;

    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: .15em solid var(--color-green);

    &__box {
        width: inherit;
        height: inherit;
        border-radius: inherit;

        background-color: var(--color-green);

        animation: bubble 1s infinite;
        perpsective: 1000px;
    }
}
</style>
