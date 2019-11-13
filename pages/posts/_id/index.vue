<template>
    <v-row
            align="center"
            justify="center"
            style="min-height: 80vh"

    >
        <v-col cols="12" md="6">
            <v-card
                    class="mx-auto"
                    color="#26c6da"
                    dark
                    max-width="400"
            >
                <v-card-title>
                    <v-icon
                            large
                            left
                            class="mr-1"
                    >
                        mdi-key-variant
                    </v-icon>
                    <span class="title font-weight-light">Post id {{post.id}}</span>
                </v-card-title>

                <v-card-text class="headline font-weight-bold">
                    {{post.title}}
                </v-card-text>

                <v-card-actions>
                    <v-list-item class="grow">
                        <v-row
                                align="center"
                                justify="end"
                        >
                            <v-btn text @click="$router.back()">
                                <v-icon class="mr-1">mdi-keyboard-return</v-icon>
                                <span class="subheading mr-2">Regresar</span>
                            </v-btn>
                        </v-row>
                    </v-list-item>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "index",
        asyncData(context) {
            return context.app.$axios.get('https://jsonplaceholder.typicode.com/todos/' + context.params.id).then(response => {
                return {post: response.data}
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