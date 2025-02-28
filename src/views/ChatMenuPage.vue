<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="end">
                    <ion-button fill="clear" @click="navigateTo('/main')">
                        <ion-icon name="home-outline"></ion-icon>
                    </ion-button>
                    <ion-button fill="clear" @click="navigateTo('/friends-menu')"> <!-- Menú Amigos -->
                        <ion-icon name="people-outline"></ion-icon>
                    </ion-button>
                    <ion-button fill="clear" @click="navigateTo('/my-profile')">  <!-- Mi perfil -->
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

        <ion-content :fullscreen="true" class="ion-padding">
            <h2>Mensajes</h2>

            <ion-searchbar placeholder="Buscar Chat"></ion-searchbar>
                
            <ion-list lines="none">

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
.small-text {
    font-size: 0.8em;
    color: var(--ion-color-medium);
}
.no-underline {
  text-decoration: none;
}
</style>