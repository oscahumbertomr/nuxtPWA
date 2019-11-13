<template>
    <div>
        <h1 class="lol">The user's id is = {{$route.params.id}}</h1>
    </div>
</template>

<script>
    export default {
        name: "index",
        head:{
            title:'user id'
        },
        validate(context){
            return !(/\D/g).test(context.params.id)
        }
    }
</script>

<style scoped>

</style>