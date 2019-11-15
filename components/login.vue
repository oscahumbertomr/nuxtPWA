<template>
    <v-dialog
            v-model="modalLoginStatus"
            width="400"
    >
        <v-card width="400" class="mx-auto mt-5">
            <v-card-title class="pb-0">
                <h1>Login</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                            label="Email or username"
                            v-model="username"
                            prepend-icon="mdi-account-circle"
                    />
                    <v-text-field
                            :type="showPassword ? 'text' : 'password'"
                            label="Password"
                            v-model="password"
                            prepend-icon="mdi-lock"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                    />
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn color="success" @click="registerUser">Register?</v-btn>
                <v-btn color="info">Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                showPassword: false,
                username: null,
                password:null,
            }
        },
        methods: {
            registerUser() {
                this.$auth.loginWith(
                    "local",{
                        data: {
                            email :this.username,
                            password: this.password
                        }
                    }
                )
            }
        },
        computed: {
            modalLoginStatus: {
                get() {
                    return this.$store.getters.modalLoginStatus;
                },
                set(modalStatus) {
                    this.$store.dispatch('setModalLoginStatus', modalStatus)
                }
            },
            posts() {
                return this.$store.getters.posts;
            }
        },
        mounted() {
            window.vm = this
        }

    }
</script>

<style scoped>

</style>