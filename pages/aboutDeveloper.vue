<template>
    <v-row>
        <v-col cols="5">
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
                <v-col cols="12" class="pb-0">
                    Name:
                </v-col>
                <v-col cols="12" class="pt-0">
                    Oscar Humberto Montejo Rodriguez
                </v-col>
                <v-col cols="12" class="pb-0">
                    Address:
                </v-col>
                <v-col cols="12" class="pt-0">
                    Merida, Yucatan, Mexico
                </v-col>
                <v-col cols="12" class="pb-0">
                    Number Phone:
                </v-col>
                <v-col cols="12" class="pt-0">
                    (+52) 999-130-1364
                </v-col>
                <v-col cols="12" class="pb-0">
                    Education:
                </v-col>
                <v-col cols="12" class="pt-0">
                    Mechatronics Engineer
                </v-col>
                <v-col cols="12" class="pb-0">
                    Languages:
                </v-col>
                <v-col cols="12" class="pt-0">
                    <v-row>
                        <v-col cols="12" class="py-0">
                            <v-col class="pb-0" cols="12">
                                Spanish
                            </v-col>
                            <v-col class="pt-0 ml-3" cols="12">
                                Native
                            </v-col>
                        </v-col>
                        <v-col cols="6" class="py-0">
                            <v-col class="pb-0" cols="12">
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
                                        color="red"
                                        background-color="grey lighten-1"
                                ></v-rating>
                            </v-col>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

        </v-col>
        <v-col cols="7">
            <v-row cols="12">
                Main programming languages
            </v-row>
            <v-row>
                <v-col cols="6" class="py-0">
                    <v-col class="pb-0" cols="12">
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
                                color="red"
                                background-color="grey lighten-1"
                        ></v-rating>
                    </v-col>
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-col class="pb-0" cols="12">
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
                                color="red"
                                background-color="grey lighten-1"
                        ></v-rating>
                    </v-col>
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-col class="pb-0" cols="12">
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
                                color="red"
                                background-color="grey lighten-1"
                        ></v-rating>
                    </v-col>
                </v-col>
            </v-row>
            <v-row cols="12">
                Main Frameworks
            </v-row>
            <v-row>
                <v-col cols="6" class="py-0">
                    <v-col class="pb-0" cols="12">
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
                                color="red"
                                background-color="grey lighten-1"
                        ></v-rating>
                    </v-col>
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-col class="pb-0" cols="12">
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
                                color="red"
                                background-color="grey lighten-1"
                        ></v-rating>
                    </v-col>
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-col class="pb-0" cols="12">
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
                                color="red"
                                background-color="grey lighten-1"
                        ></v-rating>
                    </v-col>
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-col class="pb-0" cols="12">
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
                                color="red"
                                background-color="grey lighten-1"
                        ></v-rating>
                    </v-col>
                </v-col>
            </v-row>
            <v-row cols="12">
            Others programming languages
        </v-row>
            <v-row>
                <v-col cols="6" class="py-0">
                    <v-col class="pb-0" cols="12">
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
                                color="red"
                                background-color="grey lighten-1"
                        ></v-rating>
                    </v-col>
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-col class="pb-0" cols="12">
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
                                color="red"
                                background-color="grey lighten-1"
                        ></v-rating>
                    </v-col>
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-col class="pb-0" cols="12">
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
                                color="red"
                                background-color="grey lighten-1"
                        ></v-rating>
                    </v-col>
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-col class="pb-0" cols="12">
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
                                color="red"
                                background-color="grey lighten-1"
                        ></v-rating>
                    </v-col>
                </v-col>
            </v-row>
            <v-row cols="12">
                Others skills
            </v-row>
            <v-row>
                <v-col cols="6" class="py-0">
                    <v-col class="pb-0" cols="12">
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
                                color="red"
                                background-color="grey lighten-1"
                        ></v-rating>
                    </v-col>
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-col class="pb-0" cols="12">
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
                                color="red"
                                background-color="grey lighten-1"
                        ></v-rating>
                    </v-col>
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-col class="pb-0" cols="12">
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
                                color="red"
                                background-color="grey lighten-1"
                        ></v-rating>
                    </v-col>
                </v-col>
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