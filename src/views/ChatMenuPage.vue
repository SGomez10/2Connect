<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
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
                <ion-title>2Connect</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true" class="ion-padding c-bg">
            <h2>Mensajes</h2>

            <ion-searchbar placeholder="Buscar Chat"></ion-searchbar>
                
            <ion-list lines="none" class="c-bg">

                <ChatListComponent
                    link="/chat/1"
                    avatar-src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"
                    name="Finn"
                    text="Texto de ejemplo"
                />

                <ChatListComponent 
                link="/chat/1"
                    avatar-src="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
                    name="Han Solo"
                    text="Texto de ejemplo"
                />

                <ChatListComponent 
                    link="/chat/1"
                    avatar-src="https://ionicframework.com/docs/demos/api/list/avatar-luke.png"
                    name="Luke Skywalker"
                    text="Texto de ejemplo"            
                />

            </ion-list>
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
    IonList,
    IonAvatar,
    IonItem,
    IonLabel,
    IonSearchbar,
    IonButtons,
    IonBackButton
} from '@ionic/vue';

import { useRouter } from 'vue-router';
import ChatListComponent from '@/components/ChatListComponent.vue';

const router = useRouter();

const navigateTo = (path: string) => {
    router.push(path);
}


</script>

<style scoped>
.c-bg {
    --background: var(--ion-background-color);
    --color: var(--ion-text-color);
}
.small-text {
    font-size: 0.8em;
    /* Ajusta el tamaño del texto según sea necesario */
    color: var(--ion-color-medium);
    /* Ajusta el color del texto según sea necesario */
}
.no-underline {
  text-decoration: none;
}
</style>