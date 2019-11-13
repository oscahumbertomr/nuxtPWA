<template>
    <div>
        <v-row justify="center">
            <h2>Makin API request - the Vue way</h2>
        </v-row>
        <v-row justify="space-between">
            <v-col v-for="post in posts" :key="post.id"  cols="auto" xs="12" md="3">
               <Card :post="post"/>
            </v-col>
        </v-row>

    </div>
</template>

<script>

    import Card from '@/components/Card.vue'

    export default {
        name: "index",
        head:{
          title:'post mamalones'
        },
        components: {
            Card
        },
        data() {
            return {
                posts: []
            }
        },
        asyncData(context){
            return context.app.$axios.get('https://jsonplaceholder.typicode.com/todos').
            then(response =>{
               return  {posts : response.data}
            }).catch(error => {
                console.log(error)
            })
        },
        methods: {

        },
        mounted() {
            window.vm = this
        }
    }
</script>

<style scoped>

</style>