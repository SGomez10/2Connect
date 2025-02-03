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
            <ion-grid>
                <ion-row>
                    <!-- Zona de chats con amigos que sólo es visible en PC -->
                    <ion-col size="12" size-md="3" class="desktop-only scrollable-column">
                        <ion-list class="no-margin">
                            <div>
                                <h2 class="margin-left">Mensajes</h2>
                            </div>
                        </ion-list>
                    </ion-col>
                    <!-- content media que siempre es visible, ocupa 3/4  -->
                    <ion-col size="12" size-md="9" class="scrollable-column">

                        <media-post-component
                        avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"
                        nombreUser="Finn"
                        desc="30 de Marzo de 2024 15:36h"
                        imageSrc="https://ionicframework.com/docs/demos/api/card/madison.jpg"
                        :comments="20"
                        :shares="7"
                        /> 
                        
                        <text-post-component 
                        avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
                        nombreUser="Han Solo"
                        desc="1 de Febrero de 2025 20:50h"
                        contentText="Hola que tal todo"
                        :comments="2"
                        :shares="0"
                        />
                        
                        <text-post-component 
                        avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
                        nombreUser="Han Solo"
                        desc="1 de Febrero de 2025 20:50h"
                        contentText="chao"
                        :comments="2"
                        :shares="0"
                        />

                        <text-post-component 
                        avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
                        nombreUser="Han Solo"
                        desc="1 de Febrero de 2025 20:50h"
                        contentText="guau"
                        :comments="2"
                        :shares="0"
                        />

                        <text-post-component 
                        avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
                        nombreUser="Han Solo"
                        desc="1 de Febrero de 2025 20:50h"
                        contentText="Miau"
                        :comments="2"
                        :shares="0"
                        />

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
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonList,
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/vue';

import { useRouter } from 'vue-router';
import MediaPostComponent from '@/components/MediaPostComponent.vue';
import TextPostComponent from '@/components/TextPostComponent.vue';

const router = useRouter();

const navigateTo = (path: string) => {
    router.push(path);
}
</script>

<style scoped>

.scrollable-column {
  height: 100vh; /* O la altura deseada */
  overflow: auto; /* Permite hacer scroll dentro de la columna */
  padding: 10px; /* Espaciado opcional */
}

.app-icon {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    object-fit: contain; /* Ajusta la imagen dentro del contenedor */
}
.no-margin {
  margin: 0;
  padding: 0;
}
.margin-left {
  margin-left: 16px;
}
/* Hide the column in mobile view */
.desktop-only {
    display: none;
}
/* Show the column in desktop view */
@media (min-width: 768px) {
    .desktop-only {
        display: block;
    }
}
</style>