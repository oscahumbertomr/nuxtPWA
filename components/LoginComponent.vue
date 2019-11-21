<template>
    <v-dialog
            v-model="modalLoginStatus"
            width="400"
            :persistent="loading"
    >
        <v-card width="400" class="mx-auto mt-5">
            <v-card-title>
                <h1>Login</h1>
            </v-card-title>
            <v-card-text>
                <v-form ref="form" lazy-validation>
                    <v-text-field
                            @focus="setRule('required')"
                            @blur="setRule('emailFormat')"
                            :rules="emailRules"
                            label="Email"
                            :disabled="loading"
                            v-model="email"
                            :error="errorCredentials"
                            v-on:keyup.enter="login"
                            prepend-icon="mdi-account-circle"
                    />
                    <v-text-field
                            v-on:keyup.enter="login"
                            :type="showPassword ? 'text' : 'password'"
                            label="Password"
                            :rules="passwordRules"
                            @focus="turnOffErrorCredentials"
                            autocomplete="new-password"
                            :disabled="loading"
                            v-model="password"
                            :error="errorCredentials"
                            prepend-icon="mdi-lock"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                    />
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <!--                <v-btn color="success" @click="registerUser">Register?</v-btn>-->
                <v-row class=" ma-0 pa-0">
                    <v-col cols="12">
                        <v-btn color="info" :loading="loading" @click="login" block>Login</v-btn>
                    </v-col>
                    <v-col cols="12" v-if="errorCredentials" class=" ma-0 pa-0">
                        <v-alert type="error">
                            Credentials error, please try again.
                        </v-alert>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "LoginComponent",
        data() {
            return {
                emailRules: [
                    v => !!v || 'E-mail is required',
                ],
                emailFormatRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be have a valid format',
                ],
                emailRequired: [
                    v => !!v || 'E-mail is required',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                ],
                showPassword: false,
                email: null,
                password: null,
                loading: false,
                errorCredentials: false
            }
        },
        methods: {
            turnOffErrorCredentials() {
                this.errorCredentials = false
                this.$refs.form.resetValidation()
            },
            setRule(rule) {
                if (rule == 'required') {
                    this.emailRules = this.emailRequired
                    this.$refs.form.resetValidation()
                } else {
                    this.emailRules = this.emailFormatRules
                }
            },
            login() {
                this.emailRules = this.emailFormatRules
                setTimeout(()=>{
                    if (this.$refs.form.validate()) {
                        this.loading = true
                        this.$auth.loginWith(
                            "local", {
                                data: {
                                    email: this.email,
                                    password: this.password
                                }
                            }
                        ).then(response => {
                                this.modalLoginStatus = false;
                                this.password = null;
                                if (this.urlTriedToVisit) {
                                    let url = this.urlTriedToVisit;
                                    this.urlTriedToVisit = null;
                                    this.$router.push(url);
                                }
                            }
                        ).catch(e => {
                                const code = parseInt(e.response && e.response.status)
                                if (code === 422) {
                                    this.errorCredentials = true
                                    console.log(e.response.data.message)
                                }
                            }
                        ).finally(f => {
                            this.loading = false
                        })
                    }
                },200)
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
            urlTriedToVisit: {
                get() {
                    return this.$store.state.urlTriedToVisit;
                },
                set(urlTriedToVisit) {
                    this.$store.dispatch('setUrlTriedToVisit', urlTriedToVisit)
                }
            },
            posts() {
                return this.$store.getters.posts;
            }
        },
        mounted() {
            window.vm2 = this
            // console.log('mounted login')
        }

    }
</script>

<style scoped>

</style>