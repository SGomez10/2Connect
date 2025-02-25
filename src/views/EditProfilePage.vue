<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/my-profile"></ion-back-button>
                    </ion-buttons>
                </ion-buttons>
                <IonTitle>2Connect</IonTitle>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">

            <strong class="margin-text">Editar perfil</strong>
            <div class="themed-item">
                <ion-label position="stacked">Aficiones</ion-label>
                <ion-textarea placeholder="Escribe tus aficiones aquí..." class="large-textarea"></ion-textarea>
            </div>
            <div class="themed-item">
                <ion-label position="stacked">Biografía</ion-label>
                <ion-textarea placeholder="Escribe una descripción de ti aquí..."
                    class="medium-textarea"></ion-textarea>
            </div>
            <div>
                <h3>Fotos</h3>
                <p>En esta sección puedes añadir fotografías para </p>
            </div>

            <ion-button expand="block" color="primary" class="ion-margin-top" shape="round" @click="navigateTo('/my-profile')">Guardar cambios</ion-button>

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
    IonButtons,
    IonImg,
    IonItem,
    IonTextarea,
    IonButton,
    IonBackButton
} from '@ionic/vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const navigateTo = (path: string) => {
    router.push(path);
}
</script>


<style scoped>
.margin-text {
    margin-top: 20px;

}

.ion-padding-top {
    --padding-top: 20px;
    /* Ajusta este valor según sea necesario */
}

.themed-item {
    margin-top: 100px;
    --background: var(--ion-background-color);
    --color: var(--ion-text-color);
}

.large-textarea {
    min-height: 200px;
    /* Ajusta la altura mínima según sea necesario */
    width: 100%;
    /* Asegura que el textarea ocupe todo el ancho del ion-item */
    padding: 8px;
    border: 1px solid var(--ion-color-medium);
    border-radius: 4px;
    box-sizing: border-box;
}

.medium-textarea {
    min-height: 100px;
    /* Ajusta la altura mínima según sea necesario */
    width: 100%;
    /* Asegura que el textarea ocupe todo el ancho del ion-item */
    padding: 8px;
    border: 1px solid var(--ion-color-medium);
    border-radius: 4px;
    box-sizing: border-box;
}
</style>