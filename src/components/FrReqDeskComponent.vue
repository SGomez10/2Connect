<template>
    <ion-card>
      <ion-img :src="imageSrc" alt="Imagen de perfil"></ion-img>
      <ion-card-content>
        <h3>{{ title }}</h3>
        <div class="button-container">
          <ion-button @click="handleFriendRequest(true)">Aceptar</ion-button>
          <ion-button color="secondary" @click="handleFriendRequest(false)">Denegar</ion-button>
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
  
  const handleFriendRequest = async (accepted: boolean) => {
    const message = accepted
      ? 'Has aceptado la solicitud de amistad.'
      : 'Has rechazado la solicitud de amistad.';
    
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
      width: 250px;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      border-radius: 10px;
      margin: 0 auto;
    }
    
    ion-img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      display: block;
      margin: 0 auto;
    }
  </style>
  