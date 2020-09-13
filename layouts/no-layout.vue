<template>
    <nuxt/>
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

