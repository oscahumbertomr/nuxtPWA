<template>
    <div>
        {{post.id}}
        {{post.title}}
    </div>
</template>

<script>
    export default {
        name: "index",
        asyncData(context){
            return context.app.$axios.get('https://jsonplaceholder.typicode.com/todos/'+context.params.id).
            then(response =>{
                return  {post : response.data}
            }).catch(error => {
                console.log(error)
            })
        },
        data() {
            return {
                post: {}
            }
        },
    }
</script>

<style scoped>

</style>