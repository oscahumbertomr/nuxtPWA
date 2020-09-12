<template>
    <v-row row grap>
        <v-col cols="12" xs="11" sm="12" md="12">
            <h1 class="display-1 font-weight-thin mb-4 text-center" >Progressive web app</h1>
        </v-col>
        <v-col cols="12" xs="11" sm="12" md="12">
            <h4 class="subheading  text-center" >This page was made whit Nuxt, Vuetify and Laravel</h4>
        </v-col>
        <v-col xs="11" sm="12" md="12">
            <v-parallax
                    dark
                    src="/waves.jpg"
                    style="min-height: 50vh; margin-top: 0"
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col class="text-center" cols="12" style="background-color: rgba(53,73,94,0.64)">
                        <h1 class="display-1 font-weight-thin mb-4">PWA</h1>
                        <h4 class="subheading">Nuxt
                            <v-icon color="#222345">mdi-heart</v-icon>
                            Vuetify
                            <v-icon color="#222345">mdi-heart</v-icon>
                            Laravel
                        </h4>
                        <v-btn outlined to="/aboutDeveloper" ><div class="text-h1">About Developer</div></v-btn>
                    </v-col>
                </v-row>
            </v-parallax>
        </v-col>
        <v-col cols="12" c>
            <h1 class="display-1 font-weight-thin my-4  ">Nuxt:</h1>
        </v-col>
        <v-col cols="12">
            <h4 class="subheading">Provides de PWA environment, do request to Apis and transforms Vue components into HTML ans Js implementing SSR technology</h4>
        </v-col>
        <v-col cols="12">
            <h1 class="display-1 font-weight-thin mb-4 ">Vuetify:</h1>
        </v-col>
        <v-col cols="12">
            <h4 class="subheading">Vuetify is a vuejs toolchain framework, provides components such as buttons, card, v-paralax ... etc </h4>
        </v-col>
        <v-col cols="12">
            <h1 class="display-1 font-weight-thin mb-4 ">Laravel:</h1>
        </v-col>
        <v-col cols="12">
            <h4 class="subheading">Provides the backend solution, Laravel is a big framework whit a lot o tools ready to use</h4>
        </v-col>
        <v-col cols="12">
            <h4 class="subheading">This project still growing</h4>
        </v-col>

    </v-row>
</template>

<script>


    export default {
        head() {
            return {
                title: "",
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    {
                        hid: "index",
                        name: "index",
                        content:
                            "index"
                    }
                ]
            };
        },
        components: {

        },
        mounted() {

        }
    }
</script>
