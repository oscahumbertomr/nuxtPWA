<template>
    <v-dialog
            v-model="modalLoginStatus"
            width="400"
            :persistent="loading"
    >
        <v-card width="400" class="mx-auto mt-5">
            <v-card-title class="pb-0">
                <h1>Login</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                            label="Email"
                            :disabled="loading"
                            v-model="email"
                            prepend-icon="mdi-account-circle"
                    />
                    <v-text-field
                            :type="showPassword ? 'text' : 'password'"
                            label="Password"
                            :disabled="loading"
                            v-model="password"
                            prepend-icon="mdi-lock"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                    />
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <!--                <v-btn color="success" @click="registerUser">Register?</v-btn>-->
                <v-btn color="info" :loading="loading" @click="login" block>Login</v-btn>
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
                email: null,
                password: null,
                loading:false
            }
        },
        methods: {
            login() {
                this.loading = true
                this.$auth.loginWith(
                    "local", {
                        data: {
                            email: this.email,
                            password: this.password
                        }
                    }
                ).then(response => {
                    console.log('nani?')
                        this.modalLoginStatus = false
                    }
                ).catch(

                ).finally(f=>{
                    this.loading = false
                })
            },
            registerUser() {
               /* this.$auth.registerStrategy(
                    "local", {
                        data: {
                            email: this.email,
                            name: 'ingOscar',
                            password: this.password
                        }
                    }
                )*/
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
            console.log('mounted')
        }

    }
</script>

<style scoped>

</style>