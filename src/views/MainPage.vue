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
        IonItem,
        IonTextarea,
        IonButton,
        IonIcon
    } from '@ionic/vue';
    import { Swiper } from 'swiper/vue';
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
</style>