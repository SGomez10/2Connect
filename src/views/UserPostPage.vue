<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col size="8">
                        <ion-img src="/assets/MediaImages/example.jpg" alt="Imagen"></ion-img>
                    </ion-col>
                    <ion-col size="4">
                        <ion-card>
                            <ion-card-header>
                                <ion-card-title>Título</ion-card-title>
                                <ion-card-subtitle>Subtítulo</ion-card-subtitle>
                            </ion-card-header>
                            <ion-card-content>
                                <ion-textarea placeholder="Escribe aquí..."></ion-textarea>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
    import { 
        IonContent, 
        IonHeader, 
        IonPage, 
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonImg,
        IonTextarea,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardSubtitle,
        IonCardContent,
        IonGrid,
        IonRow,
        IonCol
    } from '@ionic/vue';
</script>

<style scoped>
</style>
