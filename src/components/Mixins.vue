<template>
    <div class="text-purple">
        Hello Im Header 
    </div>
</template>

<script>
export default {
    name : 'Mixins',
    props : {

    }    
}
</script>

<style lang="scss" scoped>
    .text-purple {
        @include header;
        background-color: aqua;
    }
</style>