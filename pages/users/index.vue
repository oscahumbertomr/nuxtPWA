<template>
    <div>
        <v-text-field placeholder="Ingresa el Id" v-model="id" v-on:keyup.enter="sendId"></v-text-field>
    </div>
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