<template>
    <IonPage>

        <IonMenu content-id="main-content" side="end">
            <IonContent>
                <ion-list lines="none">
                    <ion-item button @click="navigateTo('/user-data')">
                        <ion-icon slot="start" name="bar-chart-outline"></ion-icon>
                        Mis Estadísticas
                    </ion-item>
                    <ion-item button @click="navigateTo('/help')">
                        <ion-icon slot="start" name="information-circle-outline"></ion-icon>
                        Ayuda
                    </ion-item>
                    <ion-item button @click="navigateTo('/faq')">
                        <ion-icon slot="start" name="help-circle-outline"></ion-icon>
                        Preguntas Frecuentes
                    </ion-item>
                    <ion-item button @click="logout">
                        <ion-icon slot="start" name="log-out-outline"></ion-icon>
                        Log Out
                    </ion-item>
                </ion-list>
            </IonContent>
        </IonMenu>

        <IonHeader>
            <IonToolbar>
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
                    <ion-menu-toggle>
                        <ion-button fill="clear">
                            <ion-icon name="menu-outline"></ion-icon>
                        </ion-button>
                    </ion-menu-toggle>
                </ion-buttons>
            </IonToolbar>
        </IonHeader>

        <IonContent class="ion-padding" id="main-content">
            <ion-row class="ion-align-items-center ion-justify-content-start" style="margin-bottom: 20px;">
                <ion-col size="auto">
                    <ion-avatar style="width: 80px; height: 80px;">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" alt="Avatar">
                    </ion-avatar>
                </ion-col>
                <ion-col>
                    <h2 style="margin: 0;">Finn</h2>
                    <ion-button fill="outline" size="small" @click="navigateTo('/edit-profile')">Editar perfil</ion-button>
                </ion-col>
            </ion-row>
                <ion-row>
                    <!-- Aficiones -->
                    <ion-col size="12" size-md="6">
                        <h3>Aficiones</h3>
                        <p class="outlined-text">Aquí se mostrarán tus aficiones.</p>
                    </ion-col>

                    <!-- Biografia -->
                    <ion-col size="12" size-md="6">
                        <h3>Biografia</h3>
                        <p class="outlined-text">Sample text.</p>
                    </ion-col>

                    <!-- Fotos-->
                    <ion-col size="12" size-md="6"> 
                        <h3>Fotos</h3>
                        <swiper :slides-per-view="1" :pagination="{ clickable: true }">
                            <swiper-slide v-for="(image, index) in images" :key="index">
                                <img :src="image" alt="Foto" style="width: 100%; border-radius: 8px;">
                            </swiper-slide>
                        </swiper>
                    </ion-col>

                    <!-- Extras-->
                    <ion-col size="12" size-md="6">
                        <h3>Extras</h3>
                        <p class="outlined-text">información extra a añadir por el user.</p>
                    </ion-col>
                </ion-row>
        </IonContent>
    </IonPage>
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
    IonRow,
    IonCol,
    IonAvatar,
    IonMenu,
    IonList,
    IonItem,
    IonMenuToggle
} from '@ionic/vue';

import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

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

const logout = () => {
    console.log('Cerrando sesión...');
    router.push('/login');
}

const images = ref([
    '/../public/MediaImages/ciudad-puente.jpg',
    '/../public/MediaImages/estanteria-libros.jpg',
    '/../public/MediaImages/pareja.jpg',
    '/../public/MediaImages/buhda.jpg',
    '/../public/MediaImages/templo-selva.jpg',
    '/../public/MediaImages/froze-forest.jpg',
]);

</script>

<style scoped>

    .outlined-text {
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 4px;
    }

</style>
