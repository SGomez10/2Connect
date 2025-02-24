<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/friends-menu"></ion-back-button>
                </ion-buttons>
                <ion-title>Chat Privado</ion-title>
            </ion-toolbar>
        </ion-header>    

        <ion-content>
            
            <ion-item no-lines>
                <ion-avatar slot="start">
                    <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" alt="Avatar">
                </ion-avatar>
                <ion-label>
                    <h2>John Doe</h2>
                    <p>Última conexión a las 14:53h</p>
                </ion-label>
            </ion-item>

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
    IonIcon,
    IonAvatar,
    IonLabel,
    IonItem,
    IonButton
} from '@ionic/vue';
</script>

<style scoped> 
</style>
