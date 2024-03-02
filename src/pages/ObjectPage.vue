<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-buttons>
                <ion-back-button slot="start" default-href="/worklistPage"></ion-back-button>
            </ion-buttons>
            <ion-title>{{ loadedInspection.id }} {{ loadedInspection.material }}</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content>
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
    IonBackButton,
    IonButtons
} from '@ionic/vue';

export default {
    name: 'ObjectPage',
    data() {
        return {
            inspectionId: this.$route.params.id
        }
    },
    computed: {
        loadedInspection() {
            return this.$store.getters.inspection(this.inspectionId)
        }
    },
   /*  watch: {
        '$route'(currentRoute) {
            this.inspectionId = currentRoute.params.id;
        }
    }, */
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonBackButton,
        IonButtons
    }
}
</script>
