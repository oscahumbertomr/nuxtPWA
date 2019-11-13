<template>
    <v-row row grap>
        <v-col cols="9" md="10" lg="10">
            <v-text-field label="User Id" placeholder="Type the user Id" v-model="id" v-on:keyup.enter="sendId"></v-text-field>
        </v-col>
        <v-col cols="3" md="2" lg="2">
            <v-btn block color="indigo darken-4" :disabled="!id" @click="sendId">
                Send
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "index",
        head:{
            title:'users'
        },
        data() {
            return {
                id: null
            }
        },
        methods: {
            sendId() {
                this.$router.push(`users/${this.id}`);
            }
        },
    }
</script>

<style scoped>

</style>