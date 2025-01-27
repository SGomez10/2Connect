<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-img src="@/assets/icon.png" alt="App Icon"
                        style="width: 30px; height: 30px; margin-left: 10px;"></ion-img>
                </ion-buttons>
                <IonTitle>2Connect</IonTitle>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true" class="ion-padding-top">

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
    IonTextarea
} from '@ionic/vue';
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