<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Chat Privado</ion-title>
            </ion-toolbar>
        </ion-header>    

        <ion-content>
            <!-- Zona de chat -->
        </ion-content>

        <ion-footer>
            <ion-toolbar>
                <ion-item lines="none">
                    <ion-input placeholder="Escribe un mensaje..." clear-input></ion-input>
                    <ion-button slot="end" fill="clear">
                        <ion-icon name="send-outline"></ion-icon>
                    </ion-button>
                </ion-item>
            </ion-toolbar>
        </ion-footer>

    </ion-page>

</template>

<script setup lang="ts">
import {
    IonContent,
    IonHeader,
    IonBackButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonFooter,
    IonImg,
    IonItem,
    IonTextarea
} from '@ionic/vue';
</script>

<style scoped> 
</style>
