<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>2Connect</ion-title>
                <ion-buttons slot="end">
                    <ion-button fill="clear" @click="navigateTo('/main')">
                        <ion-icon name="home-outline"></ion-icon>
                    </ion-button>
                    <ion-button fill="clear" @click="navigateTo('/friends-menu')">      
                        <ion-icon name="people-outline"></ion-icon>
                    </ion-button>
                    <ion-button fill="clear" @click="navigateTo('/my-profile')">  
                        <ion-icon name="person"></ion-icon>
                    </ion-button>
                    <ion-button fill="clear" @click="navigateTo('/chat-menu')">  
                        <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                    </ion-button>
                    <ion-button fill="clear" @click="handleNotificationsClick"> 
                        <ion-icon name="notifications-outline"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-grid>
                <ion-row class="no-margin">
                    <ion-col size="12" size-md="3" class="desktop-only scrollable-column no-margin">
                        <ion-list class="no-margin">
                            <div>
                                <h2 class="margin-left">Mensajes</h2>
                            </div>
                        </ion-list>
                    </ion-col>
                    <ion-col size="12" size-md="9" class="scrollable-column">
                        <media-post-component
                        avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"
                        nombreUser="Finn"
                        desc="30 de Marzo de 2024 15:36h"
                        :imageSrc="['/MediaImages/edificio.jpg', '/MediaImages/puente.jpg', '/MediaImages/mountain.jpg']"
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
                        contentText="Hola que tal todo"
                        :comments="2"
                        :shares="0"
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
                        contentText="Hola que tal todo"
                        :comments="2"
                        :shares="0"
                        />
                        <text-post-component 
                        avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
                        nombreUser="Han Solo"
                        desc="1 de Febrero de 2025 20:50h"
                        contentText="Hola que tal todo"
                        :comments="2"
                        :shares="0"
                        />
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>

        
       <!-- Modal de notificaciones (popup al pulsar el icono) -->
        <div v-if="showNotificationsModal" class="notifications-modal" @click.self="closeNotificationsModal">
        <div class="modal-content">
            <h3>Notificaciones</h3>

            <div v-if="notifications.length === 0">
                <p>No tienes nuevas notificaciones.</p>
            </div>

            <ul v-else class="notification-list">
                <li v-for="(notif, index) in notifications" :key="index" class="notification-item">
                    <img :src="notif.icon" alt="icono" class="notif-icon">
                    <div class="notif-text">
                        <p>{{ notif.message }}</p>
                        <span class="notif-time">{{ notif.time }}</span>
                    </div>
                </li>
            </ul>

            <ion-button expand="full" color="primary" @click="navigateTo('/notifications')">
                Ver todas las notificaciones
            </ion-button>
        </div>
        </div>
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
import { ref } from 'vue';

import MediaPostComponent from '@/components/MediaPostComponent.vue';
import TextPostComponent from '@/components/TextPostComponent.vue';

const notifications = ref([
    { icon: "https://ionicframework.com/docs/demos/api/list/avatar-han.png", message: "Han Solo te ha mencionado en un comentario", time: "Hace 5 min" },
    { icon: "https://ionicframework.com/docs/demos/api/list/avatar-finn.png", message: "Finn ha reaccionado a tu publicación", time: "Hace 10 min" },
    { icon: "https://ionicframework.com/docs/demos/api/list/avatar-luke.png", message: "Luke Skywalker te ha enviado una solicitud", time: "Hace 30 min" }
]);


const router = useRouter();
const showNotificationsModal = ref(false);

const navigateTo = (path: string) => {
    router.push(path);
}

const handleNotificationsClick = () => {
    if (window.innerWidth >= 768) {
        showNotificationsModal.value = true; // Modo desktop: mostrar modal
    } else {
        navigateTo('/notifications'); // Modo móvil: navegar a otra pantalla
    }
};

const closeNotificationsModal = () => {
    showNotificationsModal.value = false;
};
</script>

<style scoped>

.swiper-container {
  width: 100%;
  height: 250px; /* Altura por defecto */
}

@media (min-width: 768px) {
  .swiper-container {
    height: 180px; /* Reduce la altura en escritorio */
  }
}

.scrollable-column {
  height: 100vh;
  overflow: auto;
  margin-top: 0;
}
ion-col, ion-grid, ion-row {
  margin: 0;
}
.no-margin {
  margin: 0;
  padding: 0;
}
.margin-left {
  margin-left: 16px;
}
.desktop-only {
    display: none;
}

@media (min-width: 768px) {
    .desktop-only {
        display: block;
    }
}

/* Estilos del modal de notificaciones */
.notifications-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
    color:black;
}

.notification-list {
    list-style: none;
    padding: 0;
    margin: 10px 0;
    max-height: 200px;
    overflow-y: auto;
}

.notification-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.notification-item:last-child {
    border-bottom: none;
}

.notif-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

.notif-text p {
    margin: 0;
    font-size: 14px;
    font-weight: bold;
}

.notif-time {
    font-size: 12px;
    color: gray;
}

</style>
