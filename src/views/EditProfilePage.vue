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
                <ion-avatar class="image-center">
                    <ion-img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg"></ion-img>
                </ion-avatar>
                <div class="ion-text-center">
                    <ion-button fill="clear" color="primary" shape="round">Cambiar foto de perfil</ion-button>
                </div>      
            </div>
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
                <p>En esta sección puedes añadir fotografías para mostrar a la comunidad. </p>
                <div class="photo-gallery-container">
                    <div class="photo-gallery">
                        <p class="gallery-placeholder">No hay fotos</p>
                    </div>
                    <ion-button fill="clear" color="primary" shape="round">Añadir fotos</ion-button>
                </div>
            </div>
            <div class="themed-item">
                <ion-label position="stacked">Extras</ion-label>
                <ion-textarea placeholder="Escribe algo más sobre ti aquí..."
                    class="medium-textarea"></ion-textarea>
            </div>
            <div class="bottom-btns">
                <ion-button expand="block" color="primary" class="ion-margin-top" shape="round" @click="navigateTo('/my-profile')">Guardar cambios</ion-button>
                <ion-button expand="block" color="secondary" class="ion-margin-top" shape="round">Eliminar perfil</ion-button>
            </div>

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
    IonAvatar,
    IonLabel,
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

ion-avatar{
    width:100% !important;
    height : 100% !important;
    max-width: 100px !important;
    max-height: 100px !important;
}

.image-center{
    margin:0 auto;
    text-align: center;
}

.photo-gallery-container {
    text-align: center;
    margin-top: 20px;
}

.photo-gallery {
    width: 100%;
    height: 300px; /* Altura del rectángulo */
    border: 2px dashed var(--ion-color-medium);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--ion-color-light);
    border-radius: 8px;
    margin-bottom: 10px;
}

.gallery-placeholder {
    color: var(--ion-color-medium);
    font-size: 16px;
}

.bottom-btns {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.bottom-btns ion-button {
  flex: 1;
  margin: 0 5px;
}

</style>