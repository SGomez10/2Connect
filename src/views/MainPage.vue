<template>
    <ion-page>
        <ion-header>
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
                    <ion-col size="12" size-md="3" class="desktop-only scrollable-column no-margin no-padding">
                        <ion-list class="no-margin no-padding" lines="full">
                            <div>
                                <h2 class="margin-left">Mensajes recientes</h2>
                            </div>
                            <ChatListComponent
                                link="/chat/1"
                                avatar-src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"
                                name="Finn"
                                text="Luego hablamos"
                            />
                            <ChatListComponent 
                                link="/chat/1"
                                avatar-src="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
                                name="Han Solo"
                                text="Empanadas"
                            />
                            <ChatListComponent 
                                link="/chat/1"
                                avatar-src="https://ionicframework.com/docs/demos/api/list/avatar-luke.png"
                                name="Luke Skywalker"
                                text="Ok"            
                            />
                        </ion-list>
                    </ion-col>
                    <ion-col size="12" size-md="9" class="scrollable-column">
                        <div class="container ion-padding add-post-container"> 
                            <div class="header-section">
                                <ion-avatar>
                                    <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" />
                                </ion-avatar>
                                <input type="text" placeholder="Plasma aqui tus pensamientos" class="input-field" />
                            </div>
                            <hr />
                            <div class="button-section">
                                <ion-button expand="block"  @click="navigateTo('/create-post')">
                                    <ion-icon slot="start" name="image-outline" ></ion-icon>
                                    Añadir imagen/video
                                </ion-button>
                                <ion-button expand="block"  @click="publishPost">
                                    <ion-icon slot="start" name="add-circle-outline" ></ion-icon>
                                    Publicar post
                                </ion-button>
                            </div>
                        </div>
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
                        contentText="Dani es un buen chico"
                        :comments="2"
                        :shares="0"
                        />
                        <text-post-component 
                        avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
                        nombreUser="Han Solo"
                        desc="1 de Febrero de 2025 20:50h"
                        contentText="Ayer comí helado"
                        :comments="2"
                        :shares="0"
                        />
                        <text-post-component 
                        avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
                        nombreUser="Han Solo"
                        desc="1 de Febrero de 2025 20:50h"
                        contentText="Me duele la cabeza"
                        :comments="2"
                        :shares="0"
                        />
                        <text-post-component 
                        avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
                        nombreUser="Han Solo"
                        desc="1 de Febrero de 2025 20:50h"
                        contentText="Compré un coche nuevo"
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
import ChatListComponent from '@/components/ChatListComponent.vue';

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

const publishPost = () => {
    alert("Se ha publicado de forma exitosa");
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
.no-margin {
  margin: 0 !important;
}

.no-padding {
  padding: 0 !important;
}

.scrollable-column {
  height: 100vh;
  overflow: auto;
  margin-top: 0;
}

ion-col, ion-grid, ion-row {
  margin: 0 !important;
  padding: 0 !important;
}

.add-post-container {
    margin-left: 11px; /* Ajusta este valor según sea necesario */
    margin-right: 11px; /* Ajusta este valor según sea necesario */
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

/* Estilos para la sección addPost*/
.header-section {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

}

.container{
    background-color: #FFFFFF;
    border-radius: 5px; /* Esquinas redondeadas */
    padding: 20px; /* Espaciado interno */
}

.input-field {
    flex: 1;
    margin-left: 10px;
    padding: 10px; /* Aumenta el padding para mejor legibilidad */
    border: 1px solid #ccc; /* Borde sutil */
    border-radius: 8px; /* Esquinas más redondeadas */
    outline: 1px solid #585858; /* Outline azul (puedes cambiar el color) */
    outline-offset: 2px; /* Espacio entre el borde y el outline */
    font-size: 14px; /* Tamaño de fuente */
    transition: outline-color 0.3s ease; /* Transición suave para el outline */
  }

  /* Cambiar el color del outline al enfocar el input */
  .input-field:focus {
    outline-color: #10dc60;  
    border-color: #10dc60; 
  }

  /* Estilos para el input-field */
  .input-field {
    flex: 1;
    margin-left: 10px;
    padding: 10px; /* Aumenta el padding para mejor legibilidad */
    border: 1px solid #ccc; /* Borde sutil */
    border-radius: 8px; /* Esquinas más redondeadas */
    outline: 2px solid #3880ff; /* Outline azul*/
    outline-offset: 2px; /* Espacio entre el borde y el outline */
    font-size: 14px; /* Tamaño de fuente */
    transition: outline-color 0.3s ease; /* Transición suave para el outline */
    color: #ffffff; /* Color del texto del input */
  }

  /* Cambiar el color del placeholder */
  .input-field::placeholder {
    color: #888; /* Color del placeholder */
    opacity: 1; /* Asegura que el color se aplique correctamente */
  }

  /* Cambiar el color del outline y del placeholder al enfocar el input */
  .input-field:focus {
    outline-color: #10dc60; /* Verde */
    border-color: #10dc60; /* Cambiar el color del borde al enfocar */
  }

  .input-field:focus::placeholder {
    color: #bbb; /* Color del placeholder al enfocar */
  }



.button-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.button-section ion-button {
    flex: 1;
    margin: 0 5px;

}
</style>
