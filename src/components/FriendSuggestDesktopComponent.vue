<template>
    <ion-card>
      <ion-img :src="imageSrc" alt="Imagen de la tarjeta"></ion-img>
      <ion-card-content>
        <h3>{{ title }}</h3>
        <div class="button-container">
          <ion-button @click="showAlertFriend('Si el usuario la acepta, aparecerá en tu lista de amigos.')">Enviar solicitud</ion-button>
          <ion-button color="secondary" @click="showAlertFriend('No volveremos a mostrar a esta persona en tu lista de sugerencias.')">Suprimir</ion-button>
        </div>
      </ion-card-content>
    </ion-card>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import { IonCard, IonCardContent, IonImg, IonButton, alertController } from '@ionic/vue';
  
  const props = defineProps({
    imageSrc: String,
    title: String
  });

  const showAlertFriend = async (message: string) => {
    const alert = await alertController.create({
      header: 'Solicitud de amistad',
      message,
      buttons: ['OK']
    });
    await alert.present();
  };
  </script>
  
  <style scoped>
  h3 {
    text-align: center;
    margin-bottom: 10px;
  }
  
  .button-container {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }

  ion-card {
    width: 250px; /* Ajusta el ancho según lo que necesites */
    height: 300px; /* Ajusta la altura según lo que necesites */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius:10px;
    margin: 0 auto; /* Centra la tarjeta */
  }

  ion-img {
    width: 150px; /* Ajusta según lo que necesites */
    height: 150px; /* Ajusta según lo que necesites */
    object-fit: cover; /* Mantiene el aspecto de la imagen y la recorta si es necesario */
    display: block;
    margin: 0 auto; /* Centra la imagen horizontalmente */
  }
  </style>
  