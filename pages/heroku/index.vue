<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h1>Heroku test:</h1>
            </v-col>
        </v-row>
        <v-row v-if="test">
            <v-col cols="12">
                <h2>Result = {{test}}</h2>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col cols="auto">
                <h2>Result =</h2>
            </v-col>
            <v-col cols="3" class="pl-0 ">
                <v-skeleton-loader
                        style="height: 20px;margin-top: 8px;padding-left: 0"
                        type="text"
                ></v-skeleton-loader>
            </v-col>
        </v-row>
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
                this.$axios.get('https://nuxt-pwa-oscar.herokuapp.com/api/test').then(response => {
                // this.$axios.get('http://localhost:8000/api/test').then(response => {
                    this.test = response.data
                });
            }
        },
        mounted() {
            this.testHerokuApi()
        },

    }
</script>

<style scoped>

</style>