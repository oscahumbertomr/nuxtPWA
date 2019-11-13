<template>
    <v-card  nuxt>
        <v-card-title>
            Post {{post.id}}
        </v-card-title>
        <v-card-text>
            <nuxt-link to="`/posts/${post.id}`">{{post.title}}</nuxt-link>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Card",
        props: {
            post: {
                type: Object
            },
        },
    }
</script>

<style scoped>

</style>