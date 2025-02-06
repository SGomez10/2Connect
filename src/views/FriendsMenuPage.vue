<template>
    <IonPage>
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
                </ion-buttons>
            </IonToolbar>
        </IonHeader>
        <IonContent>

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
</script>