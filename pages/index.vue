<template>
  <v-row row grap>
    <v-col cols="12" xs="11" sm="12" md="12">
      <h1 class="display-1 font-weight-thin mb-4 text-center">
        Progressive web app
      </h1>
    </v-col>
    <v-col cols="12" xs="11" sm="12" md="12" class="py-0">
      <p class="heading text-center">
        This page was made whit Nuxt, Vuetify and Laravel
      </p>
    </v-col>
    <v-col xs="11" sm="12" md="12">
      <v-parallax dark src="/cat.webp" style="min-height: 50vh; margin-top: 0">
        <v-row align="center" justify="center">
          <v-col
            class="text-center"
            cols="12"
            style="background-color: rgba(53, 73, 94, 0.64)"
          >
            <h1 class="display-1 font-weight-thin mb-4">PWA</h1>
            <p class="heading">
              Nuxt
              <v-icon color="#222345">{{ mdiHeart }}</v-icon>
              Vuetify
              <v-icon color="#222345">{{ mdiHeart }}</v-icon>
              Laravel
            </p>
            <v-btn outlined to="/aboutDeveloper"
              ><div class="text-h1">About Developer</div></v-btn
            >
          </v-col>
        </v-row>
      </v-parallax>
    </v-col>
    <v-col cols="12" c>
      <h1 class="display-1 font-weight-thin my-4">Nuxt:</h1>
    </v-col>
    <v-col cols="12" class="py-0">
      <p class="heading">
        Provides de PWA environment, do request to Apis and transforms Vue
        components into HTML ans Js implementing SSR technology
      </p>
    </v-col>
    <v-col cols="12">
      <h1 class="display-1 font-weight-thin mb-4">Vuetify:</h1>
    </v-col>
    <v-col cols="12" class="py-0">
      <p class="heading">
        Vuetify is a vuejs toolchain framework, provides components such as
        buttons, card, v-paralax ... etc
      </p>
    </v-col>
    <v-col cols="12">
      <h1 class="display-1 font-weight-thin mb-4">Laravel:</h1>
    </v-col>
    <v-col cols="12" class="py-0">
      <p class="heading">
        Provides the backend solution, Laravel is a big framework whit a lot o
        tools ready to use
      </p>
    </v-col>
    <v-col cols="12" class="py-0">
      <p class="heading">This project still growing</p>
    </v-col>
  </v-row>
</template>

<script>
import { mdiHeart } from "@mdi/js";

export default {
  head() {
    return {
      title: "",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "index",
          name: "index",
          content: "index",
        },
      ],
    };
  },
  data() {
    return {
      mdiHeart: mdiHeart,
    };
  },
};
</script>
