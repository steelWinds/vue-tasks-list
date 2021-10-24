<template>
    <article class="preloader">
        <div class="preloader__box">
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {};
    }
};  
</script>

<style>
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
    border: .15em solid #42b883;

    &__box {
        width: inherit;
        height: inherit;
        border-radius: inherit;

        background-color: #42b883;

        animation: bubble 1s infinite;
        perpsective: 1000px;
    }
}
</style>
