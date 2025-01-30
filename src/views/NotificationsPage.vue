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

        <ion-content>
            <!-- Zona de notificaciones -->
            <h2>Notificaciones</h2>
            <ion-list class="notification-list" lines="full">
                <ion-item>
                    <ion-avatar slot="start">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" />
                    </ion-avatar>
                    <ion-label>
                        <h2>John Doe</h2>
                        <p class="small-text">Ha comentado en tu publicación</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-avatar slot="start">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-han.png" />
                    </ion-avatar>
                    <ion-label>
                        <h2>Han Solo</h2>
                        <p class="small-text">Te ha añadido a amigos</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-avatar slot="start">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-luke.png" />
                    </ion-avatar>
                    <ion-label>
                        <h2>Luke Skywalker</h2>
                        <p class="small-text">Le ha dado "Me gusta" a tu publicación</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-avatar slot="start">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-leia.png" />
                    </ion-avatar>
                    <ion-label>
                        <h2>Leia Organa</h2>
                        <p class="small-text">Ha publicado contenido en su perfil</p>
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