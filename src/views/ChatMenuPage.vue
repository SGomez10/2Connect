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
                <!-- Ejemplo de avatar 1 -->
                <router-link :to="{ path: '/chat/1' }" class="no-underline">
                    <ion-item class="c-bg">
                        <ion-avatar slot="start">
                            <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" />
                        </ion-avatar>
                        <ion-label class="c-bg">
                            <h2>John Doe</h2>
                            <p class="small-text">Texto de ejemplo</p>
                        </ion-label>
                    </ion-item>
                </router-link>

                <!-- Ejemplo de avatar 2 -->
                <ion-item class="c-bg">
                    <ion-avatar slot="start">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-han.png" />
                    </ion-avatar>
                    <ion-label class="c-bg">
                        <h2>Han Solo</h2>
                        <p class="small-text">Texto de ejemplo</p>
                    </ion-label>
                </ion-item>

                <!-- Ejemplo de avatar 3 -->
                <ion-item class="c-bg">
                    <ion-avatar slot="start">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-luke.png" />
                    </ion-avatar>
                    <ion-label class="c-bg">
                        <h2>Luke Skywalker</h2>
                        <p class="small-text">Texto de ejemplo</p>
                    </ion-label>
                </ion-item>

                <!-- Ejemplo de avatar 4 -->
                <ion-item class="c-bg">
                    <ion-avatar slot="start">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-leia.png" />
                    </ion-avatar>
                    <ion-label class="c-bg">
                        <h2>Leia Organa</h2>
                        <p class="small-text">Texto de ejemplo</p>
                    </ion-label>
                </ion-item>

                <!-- Ejemplo de avatar 5 -->
                <ion-item class="c-bg">
                    <ion-avatar slot="start">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-rey.png" />
                    </ion-avatar>
                    <ion-label class="c-bg">
                        <h2>Rey</h2>
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