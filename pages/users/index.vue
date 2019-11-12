<template>
    <div>
        <h1>Holi</h1>
        <v-text-field placeholder="user id" v-on:keyup.enter="loadUser" v-model="id"></v-text-field>
        <v-btn @click="loadUser">Load User</v-btn>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                id: null
            }
        },
        methods: {
            loadUser() {
                this.$router.push(`/users/${this.id}`);
            }
        },
    }
</script>

<style scoped>

</style>