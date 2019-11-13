<template>
    <v-card  @click="toPostId">
        <v-card-title>
            Post {{post.id}}
        </v-card-title>
        <v-card-text>
            {{post.title}}
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
        methods: {
            toPostId() {
                this.$emit('overlay')
                this.$router.push(`/posts/${this.post.id}`)
            }
        },
    }
</script>

<style scoped>

</style>