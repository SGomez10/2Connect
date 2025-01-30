<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Notificaciones</ion-title>
            </ion-toolbar>
        </ion-header>    

        <ion-content class="ion-padding">
            <!-- Zona de notificaciones -->
            <h2>Notificaciones</h2>
            <ion-list class="notification-list">
                <ion-item>
                    <ion-avatar slot="start">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" />
                    </ion-avatar>
                    <ion-label>
                        <h2>John Doe</h2>
                        <p class="small-text">Texto de ejemplo</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-avatar slot="start">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-han.png" />
                    </ion-avatar>
                    <ion-label>
                        <h2>Han Solo</h2>
                        <p class="small-text">Texto de ejemplo</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-avatar slot="start">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-luke.png" />
                    </ion-avatar>
                    <ion-label>
                        <h2>Luke Skywalker</h2>
                        <p class="small-text">Texto de ejemplo</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-avatar slot="start">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-leia.png" />
                    </ion-avatar>
                    <ion-label>
                        <h2>Leia Organa</h2>
                        <p class="small-text">Texto de ejemplo</p>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
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
    IonList,
    IonItem,
    IonLabel,
    IonAvatar
} from '@ionic/vue';
</script>

<style scoped>
.notification-list {
    --background: var(--ion-background-color);
}
</style>