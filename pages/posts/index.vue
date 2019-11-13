<template>
    <div>
        <v-row justify="center">
            <h2>Makin API request - the Vue way</h2>
        </v-row>
        <v-row justify="space-between">
            <v-col v-for="post in posts" :key="post.id" cols="12" xs="12" md="3">
                <Card :post="post" @overlay="overlay=true"/>
            </v-col>
        </v-row>
        <v-overlay :value="overlay" opacity="0.8" absolute>
            <span class="custom-loader-cached">
                <v-icon light color="#ffffff" x-large>mdi-cached</v-icon>
            </span>
        </v-overlay>
    </div>
</template>

<script>

    import Card from '@/components/Card.vue'

    export default {
        name: "index",
        head: {
            title: 'post mamalones'
        },
        components: {
            Card
        },
        data() {
            return {
                posts: [],
                overlay: false
            }
        },
        asyncData(context) {
            return context.app.$axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
                return {posts: response.data}
            }).catch(error => {
                console.log(error)
            })
        },
        methods: {},
        mounted() {
            window.vm = this
        }
    }
</script>

<style scoped>
    .custom-loader-cached {
        animation: loader 1s infinite;
        display: flex;
        margin-top: 50vh;
    }
    .v-overlay{
        align-items: end !important;
    }

    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>