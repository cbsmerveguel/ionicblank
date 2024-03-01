<!-- eslint-disable vue/no-v-for-template-key-on-child -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>Inspection Evaluation Application</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
        <ion-grid>
            <!-- Header Row -->
            <ion-row class="header-row">
                <ion-col size="4">Inspection Lot</ion-col>
                <ion-col size="4">Material</ion-col>
                <ion-col size="4">Status</ion-col>
            </ion-row>

            <template v-for="(item, index) in tableData" :key="item.inspectionId">
                <!-- <router-link :to="`/worklistPage/${index}`"> -->
                <router-link :to="`/worklistPage/${item.inspectionId}`">
                    <ion-row class="line-row">
                        <ion-col size="4">{{ item.inspectionId }}</ion-col>
                        <ion-col size="4">{{ item.material }}</ion-col>
                        <ion-col size="4">{{ item.status }}</ion-col>
                    </ion-row>
                </router-link>

                <div class="line" v-if="index < tableData.length - 1"></div>
            </template>
        </ion-grid>

        <!-- <ion-list>
            <router-link v-for="data in tableData" :to="`/worklistPage/${data.inspectionId}`" :key="data.inspectionId">
                <ion-item>
                    <ion-thumbnail slot="start">
                        <ion-img :src="data.image"></ion-img>
                    </ion-thumbnail>
                    {{ data.inspectionId }}
                </ion-item>
            </router-link>
        </ion-list> -->

    </ion-content>
</ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonGrid,
    IonRow,
    IonImg,
    IonThumbnail,
    IonLabel,
} from '@ionic/vue';

export default {
    name: 'WorklistPage',
    data() {
        return {
            /* tableData: [{
                    inspectionId: '050000425651',
                    material: 'UP210',
                    status: 'In Process',
                    image: "https://i.postimg.cc/kMQYz82j/PIC-PROD-MAIN-OBLIQUE-UM600.png"
                },
                {
                    inspectionId: '050000425652',
                    material: 'TP101',
                    status: 'Not Started',
                    image: "https://i.postimg.cc/kMQYz82j/PIC-PROD-MAIN-OBLIQUE-UM600.png"
                },
                {
                    inspectionId: '050000425653',
                    material: 'TH100',
                    status: 'In Process',
                    image: "https://i.postimg.cc/kMQYz82j/PIC-PROD-MAIN-OBLIQUE-UM600.png"
                }
            ] */
        };
    },
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonGrid,
        IonRow,
        IonImg,
        IonThumbnail,
        IonLabel
    },
    computed: {
        tableData() {
            return this.$store.getters.tableData;
        }
    }
}
</script>

<style scoped>
.header-row {
    font-weight: bold;
    color: blue;
    font-size: larger;
}

.line-row {
    font-weight: bold;
    color: black;
    text-decoration: white underline;
}

.line {
    border-top: 1px solid #ccc;
    margin-top: 10px;
    margin-bottom: 10px;
}

hr {
    border-top: 1px solid #ccc;
}
</style>
