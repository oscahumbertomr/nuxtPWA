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
                        :to="item.to"
                        router
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
            <v-menu bottom offset-y v-if="userInfo">
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on">
                        <v-icon left>mdi-account</v-icon>
                        {{userInfo}}
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
            <login/>
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
            <span>&copy; 2019</span>
        </v-footer>

    </v-app>
</template>

<script>
    import login from '@/components/login.vue';

    export default {
        components: {
            login
        },
        data() {
            return {
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
                        to: '/posts'
                    },
                    {
                        icon: 'mdi-application',
                        title: 'Users',
                        to: '/users'
                    },
                    {
                        icon: 'mdi-application',
                        title: 'Heroku',
                        to: '/heroku'
                    }
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'PWA'
            }
        },
        methods: {
            logOut() {
                this.$auth.logout();
            },
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
            userInfo() {
                let auth = this.$store.state.auth;
                if (auth && auth.user && auth.user.name) {
                    return auth.user.name
                } else {
                    return false
                }
            },
        },
        mounted() {
        }
    }
</script>
