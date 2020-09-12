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
                            min-height="180px"
                            gradient="to top, rgba(0, 0, 0, 0.4) 10%, transparent 100px"
                            style="margin-left: auto;margin-right: auto;"
                    >
                    </v-img>
                </v-col>
                <v-col cols="12" sm="6" md="12" class="py-0">
                    <v-col cols="12" class="pb-0">
                        <v-icon left>mdi-account</v-icon>
                        Name:
                    </v-col>
                    <client-only>
                        <v-col cols="12" class="pt-0" data-aos="fade-right">
                            Oscar Humberto Montejo Rodriguez
                        </v-col>
                    </client-only>
                </v-col>
                <v-col cols="12" sm="6" md="12" class="py-0">
                    <v-col cols="12" class="pb-0">
                        <v-icon left>mdi-account-clock</v-icon>
                        Age:
                    </v-col>
                    <client-only>
                        <v-col cols="12" class="pt-0" data-aos="fade-right">
                            28 years old
                        </v-col>
                    </client-only>
                </v-col>

                <v-col cols="12" sm="6" md="12" class="py-0">
                    <v-col cols="12" class="pb-0">
                        <v-icon left>mdi-map-marker</v-icon>
                        Address:
                    </v-col>
                    <client-only>
                        <v-col cols="12" class="pt-0" data-aos="fade-right">
                            Mérida, Yucatán, México
                        </v-col>
                    </client-only>
                </v-col>

                <v-col cols="12" sm="6" md="12" class="py-0">
                    <v-col cols="12" class="pb-0">
                        <v-icon left>mdi-phone</v-icon>
                        Number Phone:
                    </v-col>
                    <client-only>
                        <v-col cols="12" class="pt-0" data-aos="fade-right">
                            (+52) 999-130-1364
                        </v-col>
                    </client-only>
                </v-col>
                <v-col cols="12" sm="6" md="12" class="py-0">
                    <v-col cols="12" class="pb-0">
                        <v-icon left>mdi-school</v-icon>
                        Education:
                    </v-col>
                    <client-only>
                        <v-col cols="12" class="pt-0" data-aos="fade-right">
                            Mechatronics Engineer (2012-2016)
                        </v-col>
                    </client-only>
                </v-col>
                <v-col cols="12" md="12" class="py-0">
                    <v-col cols="12" class="pb-0">
                        <v-icon left>mdi-translate</v-icon>
                        Languages:
                    </v-col>
                    <client-only>
                        <v-col cols="12" class="pt-0" data-aos="fade-right">
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
                                                color="#EF5350"
                                                background-color="grey lighten-1"
                                        ></v-rating>
                                    </v-col>
                                </v-col>
                            </v-row>
                        </v-col>
                    </client-only>
                </v-col>
            </v-row>

        </v-col>
        <v-col cols="12" md="7" >
            <v-row cols="12">
                <v-card>
                    <div v-for="(category, index) in categorySkills" :key="index">
                        <v-card-title style="background-color:#EF5350">
                        <h1 class="headline mx-auto">{{category.title}}</h1>
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <client-only>
                                    <v-col cols="12" sm="6" class="py-0" data-aos="fade-right" v-for="(skill, index) in category.skills" :key="index">
                                        <v-col class="pb-0" cols="12">
                                            <v-icon left>{{skill.icon}}</v-icon>
                                            {{skill.name}}
                                        </v-col>
                                        <v-col class="pt-0" cols="12">
                                            <v-rating
                                                length="5"
                                                :value="skill.value"
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
                                </client-only>
                            </v-row>
                        </v-card-text>
                    </div>    
                </v-card>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "about",
        data() {
            return {
                categorySkills:[
                    {
                        title: 'Main programming languages',
                        skills:[
                            {
                                name: 'Php',
                                icon:'mdi-language-php',
                                value: '4'
                            },
                            {
                                name: 'Javascript',
                                icon:'mdi-language-javascript',
                                value: '4.5'
                            },
                            {
                                name: 'SQL',
                                icon:'mdi-database',
                                value: '4'
                            }
                        ]
                    },
                    {
                        title: 'Main Frameworks',
                        skills:[
                            {
                                name: 'Laravel',
                                icon:'mdi-laravel',
                                value: '4.9'
                            },
                            {
                                name: 'Symfony',
                                icon:'mdi-symfony',
                                value: '3.5'
                            },
                            {
                                name: 'VueJs',
                                icon:'mdi-vuejs',
                                value: '5'
                            },
                            {
                                name: 'NuxtJs',
                                icon:'mdi-vuejs',
                                value: '4.5'
                            }
                        ]
                    },
                    {
                        title: 'Others programming languages',
                        skills:[
                            {
                                name: 'Python',
                                icon:'mdi-language-python',
                                value: '2'
                            },
                            {
                                name: 'Lua',
                                icon:'mdi-language-lua',
                                value: '3'
                            },
                            {
                                name: 'Arduino',
                                icon:'mdi-chip',
                                value: '3.8'
                            },
                            {
                                name: 'Ladder (PLC)',
                                icon:'mdi-chip',
                                value: '2'
                            }
                        ]
                    },
                    {
                        title: 'DevOps',
                        skills:[
                            {
                                name: 'Git',
                                icon:'mdi-git',
                                value: '4.9'
                            },
                            {
                                name: 'AWS and Linux',
                                icon:'mdi-aws',
                                value: '3'
                            },
                            {
                                name: 'Docker',
                                icon:'mdi-docker',
                                value: '1.9'
                            },
                        ]
                    },
                    {
                        title: 'Others skills',
                        skills:[
                            {
                                name: 'Electronic',
                                icon:'mdi-flash',
                                value: '4'
                            },
                            {
                                name: 'Microcontrollers',
                                icon:'mdi-chip',
                                value: '4'
                            },
                            {
                                name: '3d modeling with fusion 360 and 3d printing',
                                icon:'mdi-printer-3d-nozzle',
                                value: '3'
                            },
                        ]
                    },
                    ]
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>