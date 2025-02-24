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
            <ion-row class="ion-align-items-center ion-justify-content-start" style="margin-bottom: 20px;">
                <ion-col size="auto">
                    <ion-avatar style="width: 80px; height: 80px;">
                        <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" alt="Avatar">
                    </ion-avatar>
                </ion-col>
                <ion-col>
                    <h2 style="margin: 0;">Fren</h2>
                    <ion-button fill="outline" size="small"  @click="navigateTo('/chat/1')">Enviar mensaje</ion-button>
                    <ion-button fill="outline" size="small"  @click="showAlert">Eliminar de amigos</ion-button>
                </ion-col>
            </ion-row>
                <ion-row>
                    <!-- Aficiones -->
                    <ion-col size="12" size-md="6">
                        <h3>Aficiones</h3>
                        <p class="outlined-text">Aquí se mostrarán las aficiones de la persona.</p>
                    </ion-col>

                    <!-- Zona de posteo-->
                    <ion-col size="12" size-md="6">
                        <h3>Biografia</h3>
                        <p class="outlined-text">Biografía de la persona</p>
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
                        <p class="outlined-text">Aquí pondrá información extra que quiera compartir.</p>
                    </ion-col>
                </ion-row>
        </IonContent>
    </IonPage>
    <ion-alert
        :is-open="isAlertOpen"
        header="Aviso"
        message="Se ha eliminado este usuario de tus amigos"
        buttons="OK"
        @didDismiss="isAlertOpen = false"
    ></ion-alert>
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
        IonAlert
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

    const isAlertOpen = ref(false);

    function showAlert() {
        isAlertOpen.value = true;
    }
    const closeNotificationsModal = () => {
        showNotificationsModal.value = false;
    };

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