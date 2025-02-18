<template>
    <ion-item class="c-bg">
      <ion-avatar slot="start">
        <img :src="avatarSrc" />
      </ion-avatar>
      <ion-label class="c-bg">
        <h2>{{ name }}</h2>
        <div class="button-container">
          <ion-button @click="showAlertAccept('Has aceptado la solicitud de amistad')">
            Aceptar
          </ion-button>
          <ion-button @click="showAlertReject('Has rechazado la solicitud de amistad')">
            Rechazar
          </ion-button>
        </div>
      </ion-label>
    </ion-item>
  </template>
  
  <script setup lang="ts">
  import { alertController } from '@ionic/vue';
  
  const props = defineProps({
    avatarSrc: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  });
  
  const showAlertAccept = async (message: string) => {
    const alert = await alertController.create({
      header: 'Solicitud aceptada',
      message,
      buttons: ['OK']
    });
    await alert.present();
  };
  
  const showAlertReject = async (message: string) => {
    const alert = await alertController.create({
      header: 'Solicitud rechazada',
      message,
      buttons: ['OK']
    });
    await alert.present();
  };
  </script>
  
  <style scoped>
  .c-bg {
    --background: var(--ion-background-color);
  }
  .button-container {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }
  </style>
  