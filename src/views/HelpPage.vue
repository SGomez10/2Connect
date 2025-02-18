<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Ayuda</ion-title>
            </IonToolbar>
        </IonHeader>

        <IonContent class="ion-padding">
            <ion-accordion-group>
                <ion-accordion value="first">
                    <ion-item slot="header" color="light">
                        <ion-label>Cómo crear una cuenta 2Connect</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">First Content</div>
                </ion-accordion>
                <ion-accordion value="second">
                    <ion-item slot="header" color="light">
                        <ion-label>Cómo eliminar mi cuenta 2Connect</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">Second Content</div>
                </ion-accordion>
                <ion-accordion value="third">
                    <ion-item slot="header" color="light">
                        <ion-label>Cómo añadir amigos</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">Third Content</div>
                </ion-accordion>
            </ion-accordion-group>
        </IonContent>

    </IonPage>

</template>

<script setup lang="ts">
    import { IonHeader, 
        IonPage,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonContent, 
        IonItem,
        IonLabel,
        IonAccordion,
        IonAccordionGroup
    } from '@ionic/vue';

</script>

<style scoped>

    .bg-transparent {
    background: transparent;
    }

</style>