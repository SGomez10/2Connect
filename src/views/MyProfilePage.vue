<template>
    <IonPage>

        <IonMenu content-id="main-content" side="end">
            <IonContent>
                <ion-list>
                    <ion-item button @click="navigateTo('/stats')">Mis Estadísticas</ion-item>
                    <ion-item button @click="navigateTo('/help')">Ayuda</ion-item>
                    <ion-item button @click="navigateTo('/faq')">Preguntas Frecuentes</ion-item>
                    <ion-item button @click="logout">Log Out</ion-item>
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
                    <h2 style="margin: 0;">Nombre de Usuario</h2>
                    <ion-button fill="outline" size="small">Editar perfil</ion-button>
                </ion-col>
            </ion-row>
                <ion-row>
                    <!-- Aficiones -->
                    <ion-col size="12" size-md="6">
                        <h3>Aficiones</h3>
                        <p class="outlined-text">Aquí se mostrarán tus aficiones.</p>
                    </ion-col>

                    <!-- Zona de posteo-->
                    <ion-col size="12" size-md="6">
                        <h3>Biografia</h3>
                        <p class="outlined-text">Sample text.</p>
                    </ion-col>

                    <!-- Fotos-->
                    <ion-col size="12" size-md="6"> 

                    </ion-col>

                    <!-- Biografia -->
                    <ion-col size="12" size-md="6">

                    </ion-col>

                    <!-- Mis posts-->
                    <ion-col size="12" size-md="6">

                    </ion-col>

                    <!-- Extras-->
                    <ion-col size="12" size-md="6">

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

</script>

<style scoped>

    .outlined-text {
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 4px;
    }

</style>
