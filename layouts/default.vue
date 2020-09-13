<template>
    <v-app dark>
        <v-navigation-drawer
                v-model="drawer"
                :mini-variant="miniVariant"
                :clipped="clipped"
                fixed
                app
        >
            <v-list>
                <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        @click="toUrl(item)"
                        exact
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"/>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
                :clipped-left="clipped"
                fixed
                app
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title v-text="title"/>
            <v-spacer/>
            <v-menu bottom offset-y v-if="authenticated">
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on">
                        <v-icon left>mdi-account</v-icon>
                        {{user.name}}
                        <v-icon right>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item @click="logOut">
                        <v-list-item-title>
                            <v-icon left>mdi-login</v-icon>
                            logout
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text @click="modalLoginStatus = true" v-else>
                <v-icon left>mdi-login</v-icon>
                login
            </v-btn>
        </v-app-bar>
        <v-content>
            <LoginComponent/>
            <v-container>
                <nuxt/>
            </v-container>
        </v-content>
        <v-navigation-drawer
                v-model="rightDrawer"
                :right="right"
                temporary
                fixed
        >
            <v-list>
                <v-list-item @click.native="right = !right">
                    <v-list-item-action>
                        <v-icon light>
                            mdi-repeat
                        </v-icon>
                    </v-list-item-action>
                    <v-list-item-title>Switch drawer (click me)</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-footer
                :fixed="fixed"
                app
        >
            <span>&copy; 2020</span>
        </v-footer>
        <v-overlay :value="overlay" opacity="0.8" absolute z-index="500">
            <span class="custom-loader-cached">
                <v-icon light color="#ffffff" x-large>mdi-cached</v-icon>
            </span>
        </v-overlay>
    </v-app>
</template>

<script>
    import LoginComponent from '@/components/LoginComponent.vue';

    export default {
        components: {
            LoginComponent,
        },
        data() {
            return {
                overlay: false,
                clipped: false,
                drawer: false,
                fixed: false,
                items: [
                    {
                        icon: 'mdi-home-outline',
                        title: 'Home  ',
                        to: '/'
                    },
                    {
                        icon: 'mdi-adobe',
                        title: 'AdobeXD',
                        to: '/adobexd'
                    },
                    {
                        icon: 'mdi-emoticon-happy-outline',
                        title: 'Inspire',
                        to: '/inspire'
                    },
                    {
                        icon: 'mdi-application',
                        title: 'Posts',
                        to: '/posts',
                        shouldLoged: true
                    },
                    {
                        icon: 'mdi-application',
                        title: 'Users',
                        to: '/users'
                    },
                    {
                        icon: 'mdi-application',
                        title: 'Heroku',
                        to: '/heroku',
                    },
                    {
                        icon: 'mdi-heart',
                        title: 'About Developer',
                        to: '/aboutDeveloper',
                    }
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'PWA'
            }
        },
        methods: {
            toUrl(item) {
                if (item.shouldLoged && !this.authenticated) {
                    this.modalLoginStatus = true
                    this.urlTriedToVisit = item.to
                } else {
                    this.$router.push(item.to)
                }
            },
            logOut() {
                this.$auth.logout().then(response => {
                    this.$router.push('/')
                });
            },
        },
        computed: {
            urlTriedToVisit: {
                get() {
                    return this.$store.state.urlTriedToVisit;
                },
                set(urlTriedToVisit) {
                    this.$store.dispatch('setUrlTriedToVisit', urlTriedToVisit)
                }
            },
            modalLoginStatus: {
                get() {
                    return this.$store.getters.modalLoginStatus;
                },
                set(modalStatus) {
                    this.$store.dispatch('setModalLoginStatus', modalStatus)
                }
            },
        },
        mounted() {
            window.vm = this
            this.$axios.onRequest(rquest => {
                this.$nuxt.$loading.start();
                this.overlay = true
            });

            this.$axios.onResponse(response => {
                this.overlay = false
                this.$nuxt.$loading.finish();
            });

            this.$axios.onError(response => {
                this.overlay = false
                this.$nuxt.$loading.finish();
            });
            this.$axios.onRequestError(response => {
                this.overlay = false
                this.$nuxt.$loading.finish();
            });
            this.$axios.onResponseError(error => {
                this.overlay = false
                this.$nuxt.$loading.finish();
                const code = parseInt(error.response && error.response.status)
                if (code === 401) {
                    vm.urlTriedToVisit = vm.$route.path
                    vm.modalLoginStatus = true
                }
            });

        }
    }
</script>
<style scoped>
    .custom-loader-cached {
        animation: loader 1s infinite;
        display: flex;
        margin-top: 50vh;
    }

    .v-overlay {
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

