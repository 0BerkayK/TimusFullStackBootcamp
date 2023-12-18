<template>
    <v-toolbar class="content">
        <v-container class="container">
            <v-row>
                <img src="https://www.biletdukkani.com/_nuxt/img/biletdukkani-logo.7a1b601.svg">
                <v-spacer></v-spacer>
                <v-btn class="btn">
                    <svg-icon type="mdi" :path="mdiAirplane"></svg-icon> Uçak Bileti
                </v-btn>
                <v-btn class="btn">
                    <svg-icon type="mdi" :path="mdiBedKing"></svg-icon> Otel
                </v-btn>
                <v-btn class="btn">
                    <svg-icon type="mdi" :path="path"></svg-icon> Otobüs
                </v-btn>
                <v-btn class="btn">
                    <svg-icon type="mdi" :path="mdiCar"></svg-icon> Araç
                </v-btn>
                <v-btn class="btn">
                    <svg-icon type="mdi" :path="mdiCarEstate"></svg-icon> Transfer
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="btn-agency">
                    <svg-icon type="mdi" :path="mdiStorefront"></svg-icon> Acente
                </v-btn>
                <div class="text-center">
                    <v-menu open-on-hover>
                        <template v-slot:activator="{ props }">
                            <v-btn color="primary" v-bind="props">
                                <img height="14" weight="21"
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJmbGFnLWljb25zLXRyIiB2aWV3Qm94PSIwIDAgNjQwIDQ4MCI+CiAgPGcgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIGZpbGw9IiNlMzBhMTciIGQ9Ik0wIDBoNjQwdjQ4MEgweiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQwNyAyNDcuNWMwIDY2LjItNTQuNiAxMTkuOS0xMjIgMTE5LjlzLTEyMi01My43LTEyMi0xMjAgNTQuNi0xMTkuOCAxMjItMTE5LjggMTIyIDUzLjcgMTIyIDExOS45eiIvPgogICAgPHBhdGggZmlsbD0iI2UzMGExNyIgZD0iTTQxMyAyNDcuNWMwIDUzLTQzLjYgOTUuOS05Ny41IDk1LjlzLTk3LjYtNDMtOTcuNi05NiA0My43LTk1LjggOTcuNi05NS44IDk3LjYgNDIuOSA5Ny42IDk1Ljl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtNDMwLjcgMTkxLjUtMSA0NC4zLTQxLjMgMTEuMiA0MC44IDE0LjUtMSA0MC43IDI2LjUtMzEuOCA0MC4yIDE0LTIzLjItMzQuMSAyOC4zLTMzLjktNDMuNSAxMi0yNS44LTM3eiIvPgogIDwvZz4KPC9zdmc+Cg==">
                                <svg-icon type="mdi" :path="mdiMenuDown" class="lang"></svg-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in items" :key="index">
                                <v-list-item-title>
                                    {{item.title}}
                                </v-list-item-title>        
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
                <v-btn class="btn">
                    Üye Ol
                </v-btn>
                <v-btn class="btn">
                    Giriş Yap
                </v-btn>

            </v-row>
        </v-container>
    </v-toolbar>

</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCar, mdiBedKing, mdiBus, mdiAirplane, mdiCarEstate, mdiStorefront, mdiMenuDown } from '@mdi/js';

export default {
    name: "my-cool-component",

    components: {
        SvgIcon
    },

    data() {
        return {
            path: mdiBus, mdiCar, mdiBedKing, mdiAirplane, mdiCarEstate, mdiStorefront, mdiMenuDown,
            items: [
                { title: 'Türkçe' },
                { title: 'English' },
            ],
        }
    }

}

</script>
<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Roboto:wght@400;500;700&display=swap');

.content {
    height: 64px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    position: relative;
    box-sizing: border-box;
    
}
.container{
    position: relative;
    margin: 0 auto;
    width: 80%;
    padding: 0;
    max-width: 1280px;
}
.btn-agency {
    text-transform: unset !important;
    color: #0b69ff;

}

.container {}

.btn {
    text-transform: unset !important;
    color: #1c2b3d;

}
</style>
