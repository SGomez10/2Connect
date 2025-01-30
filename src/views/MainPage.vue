<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>2Connect</ion-title>
                <ion-buttons slot="end">
                    <ion-button fill="clear" @click="navigateTo('/main')">
                        <ion-icon name="home-outline"></ion-icon>
                    </ion-button>
                    <ion-button fill="clear" @click="navigateTo('#')">      <!-- Menú Amigos -->
                        <ion-icon name="people-outline"></ion-icon>
                    </ion-button>
                    <ion-button fill="clear" @click="navigateTo('#')">  <!-- Mi perfil -->
                        <ion-icon name="person"></ion-icon>
                    </ion-button>
                    <ion-button fill="clear" @click="navigateTo('/chat-menu')">  <!-- Mensajes -->
                        <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                    </ion-button>
                    <ion-button fill="clear" @click="navigateTo('/notifications')"> <!-- Notificaciones -->
                        <ion-icon name="notifications-outline"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-card class="full-width-card">
                <ion-card-header>
                    <ion-avatar slot="start">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" alt="Avatar">
                    </ion-avatar>
                    <ion-card-title>John Doe</ion-card-title>
                    <ion-card-subtitle>30 de Enero de 2025 16:45</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-img src="https://ionicframework.com/docs/demos/api/card/madison.jpg"></ion-img>
                    <div class="card-info">
                        <p>20 Comentarios</p>
                        <p>7 Compartidos</p>
                    </div>
                </ion-card-content>
            </ion-card>
        </ion-content>

    </ion-page>
</template>
<script setup lang="ts">
    import {IonContent, 
        IonHeader, 
        IonPage, 
        IonTitle, 
        IonToolbar,
        IonButtons,
        IonImg,
        IonAvatar,
        IonLabel,
        IonItem,
        IonTextarea,
        IonButton,
        IonIcon,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardSubtitle,
        IonCardContent
    } from '@ionic/vue';

    import { useRouter } from 'vue-router';

    const router = useRouter();

    const navigateTo = (path: string) => {
        router.push(path);
    }

</script>

<style scoped>
    .app-icon {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    object-fit: contain; /* Ajusta la imagen dentro del contenedor */
    }
    .card-info {
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    .full-width-card {
        width: 100%;
    }
</style>