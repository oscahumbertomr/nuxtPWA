<template>
    <v-app :dark="false" ligth>
        <v-app-bar
                :clipped-left="clipped"
                fixed
                app
                color="#21A7D8"
        >
            <v-img src="Logo.svg" contain max-width="150"></v-img>
            <v-toolbar-title v-text="title"/>
            <v-spacer/>
            <v-btn text class="h2" >
                Inicio
            </v-btn>
            <v-btn text class="h2" >
                Acerca
            </v-btn>
            <v-btn text class="h2" >
                Blog
            </v-btn>
            <v-btn text class="h2" >
                Contacto
            </v-btn>
        </v-app-bar>
        <v-container style="max-width: 600px">
            <v-row justify="center" align="center">
                <v-col cols="12" class="py-0">
                    <h1 class="h1">Este es el título de un artículo de este sitio</h1>
                </v-col>
                <v-col cols="12" class="py-0">
                    <div class="date">Publicado el 27 de junio de 2020</div>
                </v-col>
                <v-col cols="12" class="py-0" style="margin-top: 28px !important;">
                    <v-img src="cat.png" contain></v-img>
                </v-col>
                <v-col cols="12" class="py-0" style="margin-top: 28px !important;">
                    <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet viverra turpis.
                        Sed congue sit amet nunc vitae hendrerit. Etiam pharetra dapibus vestibulum.
                        Praesent dignissim lacus sodales diam pellentesque, ac egestas justo finibus.
                        Maecenas velit tellus, porta at venenatis in, consectetur et nisl.
                        Pellentesque vehicula lorem id lectus porta vulputate.
                    </p>
                </v-col>
                <v-col cols="12" class="py-0">
                    <h2 class="h2">
                        Soy un subtítulo
                    </h2>
                </v-col>
                <v-col cols="12">
                    <h2 class="h2">
                        <a href="https://xd.adobe.com/view/f6f3f632-7163-404a-a083-69f23174623d-a3a0/specs/"
                           target="_blank"
                            style="word-break: break-all"
                        >https://xd.adobe.com/view/f6f3f632-7163-404a-a083-69f23174623d-a3a0/specs/</a>
                    </h2>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap');

    .theme--dark.v-application {
        background: #ffffff;
        color: #000000;
    }

    $negro: #1A2B31;
    $gris: #8AA2AA;
    $celeste: #21A7D8;
    $blanco: #FFFFFF;

    /* Font/text values */
    $unnamed-font-family-nunito-sans: Nunito Sans;
    $unnamed-font-style-normal: normal;
    $unnamed-font-weight-800: 800px;
    $unnamed-font-weight-normal: normal;
    $unnamed-font-size-14: 14px;
    $unnamed-font-size-16: 16px;
    $unnamed-font-size-28: 28px;
    $unnamed-font-size-40: 40px;
    $unnamed-character-spacing-0: 0px;
    $unnamed-line-spacing-22: 22px;
    $unnamed-line-spacing-24: 24px;
    $unnamed-line-spacing-32: 32px;
    $unnamed-line-spacing-52: 52px;
    /* Character Styles */
    .h1 {
        font-family: $unnamed-font-family-nunito-sans;
        font-style: $unnamed-font-style-normal;
        font-weight: $unnamed-font-weight-800 !important;
        font-size: $unnamed-font-size-40;
        line-height: $unnamed-line-spacing-52;
        letter-spacing: $unnamed-character-spacing-0;
        color: $negro;
        text-align: left;
        opacity: 1;
        margin-top: 80px;
    }

    .date {
        font-family: $unnamed-font-family-nunito-sans;
        font-style: $unnamed-font-style-normal;
        font-weight: $unnamed-font-weight-normal;
        font-size: $unnamed-font-size-14;
        line-height: $unnamed-line-spacing-24;
        letter-spacing: $unnamed-character-spacing-0;
        color: $gris;
    }

    .p {
        font-family: $unnamed-font-family-nunito-sans;
        font-style: $unnamed-font-style-normal;
        font-weight: $unnamed-font-weight-normal;
        font-size: $unnamed-font-size-16;
        line-height: $unnamed-line-spacing-24;
        letter-spacing: $unnamed-character-spacing-0;
        color: $negro;
    }

    .menu-link {
        font-family: $unnamed-font-family-nunito-sans;
        font-style: $unnamed-font-style-normal;
        font-weight: $unnamed-font-weight-normal;
        font-size: $unnamed-font-size-16;
        line-height: $unnamed-line-spacing-22;
        letter-spacing: $unnamed-character-spacing-0;
        color: $blanco;
    }

    .h2 {
        font-family: $unnamed-font-family-nunito-sans;
        font-style: $unnamed-font-style-normal;
        font-weight: $unnamed-font-weight-normal;
        font-size: $unnamed-font-size-28;
        line-height: $unnamed-line-spacing-32;
        letter-spacing: $unnamed-character-spacing-0;
        color: $negro;
    }
    .v-btn:not(.v-btn--round).v-size--default {
        height: 36px;
        min-width: 64px;
        padding: 0 0;
    }
</style>
<script>


    export default {
        layout: 'no-layout',
        head() {
            return {
                title: "adobeXD",
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    {
                        hid: "adobeXD",
                        name: "adobeXD",
                        content:
                            "adobeXD"
                    }
                ]
            };
        },
        data() {
            return {
                overlay: false,
                clipped: false,
                drawer: false,
                fixed: false,
            }
        },
        components: {},
        mounted() {

        }
    }
</script>
