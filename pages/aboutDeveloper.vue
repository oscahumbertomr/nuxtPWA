<template>
    <v-row>
        <v-col cols="12" md="5">
            <v-row>
                <v-col cols="12">
                    <v-img
                            dark
                            src="/oscar.png"
                            max-height="100%"
                            width="50%"
                            gradient="to top, rgba(0, 0, 0, 0.4) 20%, transparent 100px"
                            style="margin-left: auto;margin-right: auto;"
                    >
                    </v-img>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                    <v-col cols="12" class="pb-0">
                        <v-icon left>mdi-account</v-icon>
                        Name:
                    </v-col>
                    <v-col cols="12" class="pt-0">
                        Oscar Humberto Montejo Rodriguez
                    </v-col>
                </v-col>

                <v-col cols="12" sm="6" md="12">
                    <v-col cols="12" class="pb-0">
                        <v-icon left>mdi-map-marker</v-icon>
                        Address:
                    </v-col>
                    <v-col cols="12" class="pt-0">
                        Merida, Yucatan, Mexico
                    </v-col>
                </v-col>

                <v-col cols="12" sm="6" md="12">
                    <v-col cols="12" class="pb-0">
                        <v-icon left>mdi-phone</v-icon>
                        Number Phone:
                    </v-col>
                    <v-col cols="12" class="pt-0">
                        (+52) 999-130-1364
                    </v-col>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                    <v-col cols="12" class="pb-0">
                        <v-icon left>mdi-school</v-icon>
                        Education:
                    </v-col>
                    <v-col cols="12" class="pt-0">
                        Mechatronics Engineer (2012-2016)
                    </v-col>
                </v-col>
                <v-col cols="12"  md="12">
                    <v-col cols="12" class="pb-0">
                        <v-icon left>mdi-translate</v-icon>
                        Languages:
                    </v-col>
                    <v-col cols="12" class="pt-0">
                        <v-row>
                            <v-col cols="12" sm="6" md="12" class="py-0">
                                <v-col class="pb-0" cols="12">
                                    Spanish
                                </v-col>
                                <v-col class="pt-0 ml-3" cols="12">
                                    Native
                                </v-col>
                            </v-col>
                            <v-col cols="6" sm="6" md="12" class="py-0">
                                <v-col class="pb-0" cols="12" >
                                    English
                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="3"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-col>
            </v-row>

        </v-col>
        <v-col cols="12" md="7">
            <v-row cols="12">
                <v-card>
                    <v-card-title style="background-color:#EF5350">
                        <h1 class="headline mx-auto">Main programming languages</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="6" class="py-0">
                                <v-col class="pb-0" cols="12">
                                    <v-icon left>mdi-language-php</v-icon>
                                    Php
                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="4"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                            <v-col cols="12" sm="6"  class="py-0">
                                <v-col class="pb-0" cols="12">
                                    <v-icon left>mdi-language-javascript</v-icon>
                                    Javascript
                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="4.5"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                            <v-col cols="12" sm="6"  class="py-0">
                                <v-col class="pb-0" cols="12">
                                    <v-icon>mdi-database</v-icon>
                                    SQL
                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="3.5"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-title style="background-color:#EF5350">
                        <h1 class="headline mx-auto"> Main Frameworks</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="6"  class="py-0">
                                <v-col class="pb-0" cols="12">
                                    <v-icon left>mdi-laravel</v-icon>
                                    Laravel
                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="4.5"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                            <v-col cols="12" sm="6"  class="py-0">
                                <v-col class="pb-0" cols="12">
                                    <v-icon left>mdi-symfony</v-icon>
                                    Symfony
                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="3.5"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                            <v-col cols="12" sm="6"  class="py-0">
                                <v-col class="pb-0" cols="12">
                                    <v-icon left>mdi-vuejs</v-icon>
                                    VueJs
                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="5"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                            <v-col cols="12" sm="6"  class="py-0">
                                <v-col class="pb-0" cols="12">
                                    <v-icon left>mdi-nuxt</v-icon>
                                    NuxtJs
                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="4"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-title style="background-color:#EF5350">
                        <h1 class="headline mx-auto">Others programming languages</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="6"  class="py-0">
                                <v-col class="pb-0" cols="12">
                                    <v-icon left>mdi-language-python</v-icon>
                                    Python

                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="2.5"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                            <v-col cols="12" sm="6"  class="py-0">
                                <v-col class="pb-0" cols="12">
                                    <v-icon left>mdi-language-lua</v-icon>
                                    Lua
                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="4"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                            <v-col cols="12" sm="6"  class="py-0">
                                <v-col class="pb-0" cols="12">
                                    <v-icon left>mdi-chip</v-icon>
                                    Arduino
                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="3.5"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                            <v-col cols="12" sm="6"  class="py-0">
                                <v-col class="pb-0" cols="12">
                                    <v-icon left>mdi-chip</v-icon>
                                    Ladder (PLC)
                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="2"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-title style="background-color:#EF5350">
                        <h1 class="headline mx-auto">Others skills</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="6"  class="py-0">
                                <v-col class="pb-0" cols="12">
                                    <v-icon left>mdi-flash</v-icon>
                                    Electronic
                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="4"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                            <v-col cols="12" sm="6"  class="py-0">
                                <v-col class="pb-0" cols="12">
                                    <v-icon left>mdi-chip</v-icon>
                                    Microcontrollers
                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="4"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                            <v-col cols="12" sm="6"  class="py-0">
                                <v-col class="pb-0" cols="12">
                                    <v-icon left>mdi-server-network</v-icon>
                                    AWS and Linux
                                </v-col>
                                <v-col class="pt-0" cols="12">
                                    <v-rating
                                            length="5"
                                            :value="4"
                                            half-increments
                                            half-icon="mdi-star-half"
                                            empty-icon="mdi-star-outline"
                                            full-icon="mdi-star"
                                            readonly
                                            :size="25"
                                            color="#EF5350"
                                            background-color="grey lighten-1"
                                    ></v-rating>
                                </v-col>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>

            </v-row>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>

</style>