<template>
    <div>
        <h1>Heroku test:</h1>
        <h2>Result = {{test}}</h2>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                test: null
            }
        },
        methods: {
            testHerokuApi() {
                this.$axios.get('https://nuxt-pwa-oscar.herokuapp.com/api/test').then(response=>{
                    console.log(response)
                    this.test = response.data
                });
            }
        },
        mounted() {
            this.testHerokuApi()
        }
    }
</script>

<style scoped>

</style>