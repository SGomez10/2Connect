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
        <IonContent class="ion-padding">
                <IonGrid>
                    <IonRow>
                        <!-- Columna que solo se muestra en modo mobile -->
                        <IonCol class="ion-hide-lg-up" size="12">
                            <h3>Amigos</h3>
                            <div class="horizontal-buttons">
                                <IonButton class="button-item" @click="navigateTo('/friend-request')">Solicitudes de amistad</IonButton>
                                <IonButton class="button-item" @click="navigateTo('/friends')">Tus amigos</IonButton>
                            </div>

                            <h3>Personas que quizás conozcas:</h3>
                            <ion-list class="bg-transparent" lines="none">
                                <!-- Lista de usuarios sugeridos-->
                                 <FriendSuggesComponent avatar-src="https://ionicframework.com/docs/demos/api/list/avatar-han.png" name="Han Solo" />
                                 <FriendSuggesComponent avatar-src="https://ionicframework.com/docs/demos/api/list/avatar-leia.png" name="Leia Organa" />
                                 <FriendSuggesComponent avatar-src="https://ionicframework.com/docs/demos/api/list/avatar-luke.png" name="Luke Skywalker" />
                                 <FriendSuggesComponent avatar-src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" name="Finn" />
                            </ion-list>
                        </IonCol>

                        <!-- Columna que solo se muestra en modo desktop -->
                        <IonCol class="ion-hide-md-down" size="12">

                            <h3>Solicitudes de amistad:</h3>
                            <ion-list class="bg-transparent horizontal-list" lines="none">
                                <ion-item class="no-padding">
                                    <FrReqDeskComponent image-src="https://ionicframework.com/docs/demos/api/list/avatar-han.png" title="Han Solo"/>
                                </ion-item>
                                <ion-item class="no-padding">
                                    <FrReqDeskComponent image-src="https://ionicframework.com/docs/demos/api/list/avatar-leia.png" title="Leia Organa"/>
                                </ion-item>
                                <ion-item class="no-padding">
                                    <FrReqDeskComponent image-src="https://ionicframework.com/docs/demos/api/list/avatar-luke.png" title="Luke Skywalker"/>
                                </ion-item>
                                <ion-item class="no-padding">
                                    <FrReqDeskComponent image-src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" title="Finn"/>
                                </ion-item>
                            </ion-list>

                            <h3>Sugerencias de amistad:</h3>
                            <ion-list class="bg-transparent horizontal-list" lines="none">
                                <ion-item class="no-padding">
                                    <FriendSuggestDesktopComponent image-src="https://ionicframework.com/docs/demos/api/list/avatar-han.png" title="Han Solo"/>
                                </ion-item>
                                <ion-item class="no-padding">
                                    <FriendSuggestDesktopComponent image-src="https://ionicframework.com/docs/demos/api/list/avatar-leia.png" title="Leia Organa"/>
                                </ion-item>
                                <ion-item class="no-padding">
                                    <FriendSuggestDesktopComponent image-src="https://ionicframework.com/docs/demos/api/list/avatar-luke.png" title="Luke Skywalker"/>
                                </ion-item>
                                <ion-item class="no-padding">
                                    <FriendSuggestDesktopComponent image-src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" title="Finn"/>
                                </ion-item>
                            </ion-list>
                        </IonCol>
                    </IonRow>
                </IonGrid>
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
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem
} from '@ionic/vue';

import { useRouter } from 'vue-router';
import { ref } from 'vue';
import FriendSuggesComponent from '@/components/FriendSuggesComponent.vue';
import FriendSuggestDesktopComponent from '@/components/FriendSuggestDesktopComponent.vue';
import FrReqDeskComponent from '@/components/FrReqDeskComponent.vue';

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

/* Estilos para la lista de botones horizontal */

    .horizontal-buttons {
    display: flex;
    overflow-x: auto; /* Permite el desplazamiento horizontal */
    gap: 8px; /* Espacio entre los botones */
    padding: 10px 0; /* Espaciado interno */
    white-space: nowrap; /* Evita que los botones se envuelvan */
    }

    /* Estilos para cada botón en la lista */
    .button-item {
    flex: 0 0 auto; /* Evita que los botones se estiren o encogan */
    }

    .bg-transparent {
    background: transparent;
    }

    .horizontal-list {
        display: flex;
        flex-direction: row;
        overflow-x: auto; /* Permite hacer scroll si hay muchos elementos */
        white-space: nowrap; /* Evita el salto de línea */
        gap: 10px; /* Espaciado entre elementos */
        padding: 10px 0; /* Añade espacio en los bordes */
    }

    .horizontal-list::-webkit-scrollbar {
        display: none; /* Oculta la barra de desplazamiento en navegadores WebKit */
    }

</style>