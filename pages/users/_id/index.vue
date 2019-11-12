<template>
    <h1>This is user's id {{$route.params.id}}</h1>
</template>

<script>
    export default {
        name: "index",
        validate(context){
            return !(/\D/g).test(context.params.id)
        }
    }
</script>

<style scoped>

</style>