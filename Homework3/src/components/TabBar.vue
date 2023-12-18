<template>
    <div class="toolbar">
        <div class="container">
            <h2>Seyahatini Planla!</h2>
            <v-row class="btn-group">
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
            </v-row>
            <v-card>
                <v-card-text>
                    <v-window v-model="tab" class="tab-window">
                        <v-window-item value="one">
                            <v-row>
                                <v-radio-group inline>
                                <v-radio label="Tek yön" value="one"></v-radio>
                                <v-radio label="Gidiş-Dönüş" value="two"></v-radio>                
                            </v-radio-group>
                            <v-checkbox label="Sadece aktarmasız uçuslar"></v-checkbox>
                            </v-row>
                            
                        </v-window-item>

                        <v-window-item value="two">
                            2
                        </v-window-item>

                        <v-window-item value="three">
                            3
                        </v-window-item>
                        <v-window-item value="three">
                            4
                        </v-window-item>
                        <v-window-item value="three">
                            5
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCar, mdiBedKing, mdiBus, mdiAirplane, mdiCarEstate, mdiStorefront, mdiMenuDown } from '@mdi/js';


export default {

    components: {
        SvgIcon
    },
    data: () => ({
        tab: null,
        path: mdiBus, mdiCar, mdiBedKing, mdiAirplane, mdiCarEstate, mdiStorefront, mdiMenuDown,
    }),
}
</script>

<style scoped lang="css">
.toolbar {
    background-image: url(https://www.biletdukkani.com/content/product-images/landingpage.webp);
    width: 100%;
    height: 378px;
}

.container {
    color: #fff;
    position: relative;
    margin: 65px auto;
    width: 80%;
    padding: 0;
}

.btn-group {
    position: relative;
    padding: 0;
    margin: 20px auto;
    margin-bottom: 5px;
}

.btn {
    border: none;
    margin-inline-end: 7px;
    border-bottom: none;
    text-transform: unset !important;

}

.tab-window {
    width: 1280px;
    height: 130px;
    margin-top: 0px;
}

.radio {}
</style>

