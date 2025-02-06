<template>
    <ion-card>
      <ion-card-header>
        <div class="header-content">
          <ion-avatar>
            <img :src="avatarSrc" alt="Avatar">
          </ion-avatar>
          <div class="text-content">
            <ion-card-title>{{ nombreUser }}</ion-card-title>
            <ion-card-subtitle>{{ desc }}</ion-card-subtitle>
          </div>
        </div>
      </ion-card-header>
      <ion-card-content>
        <p class="card-text">{{ contentText }}</p>
        <div class="card-info">
          <p>{{ comments }} Comentarios</p>
          <p>{{ shares }} Compartidos</p>
        </div> 
        <!-- Contenedor para los botones con flexbox para mantenerlos dentro del card -->
        <div class="button-group">
          <ion-button fill="clear">Me gusta</ion-button>
          <ion-button fill="clear" router-link="/comments">Comentar</ion-button>
          <ion-button fill="clear">Compartir</ion-button>
          <ion-button fill="clear" @click="showReportAlert">Reportar</ion-button>
        </div>
      </ion-card-content>
    </ion-card>
  </template>
  
  <script setup lang="ts">  
  import { alertController, toastController } from '@ionic/vue';
  import { 
    IonCard, 
    IonCardHeader, 
    IonAvatar, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent, 
    IonButton 
  } from '@ionic/vue';
  
  const props = defineProps({
    avatarSrc: String,
    nombreUser: String,
    desc: String,
    contentText: String, //contenido del post escrito.
    comments: Number,
    shares: Number
  });

  const showReportAlert = async () => {
  const alert = await alertController.create({
    header: 'Reportar contenido',
    message: '¿Estás seguro de que deseas reportar este contenido?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'Reportar',
        handler: async () => {
          const confirmAlert = await alertController.create({
            header: 'Reporte enviado',
            message: 'El reporte ha sido enviado con éxito.',
            buttons: [
              {
                text: 'Aceptar',
                handler: () => {
                  console.log('Reporte confirmado');
                },
              },
            ],
          });
          await confirmAlert.present();
        },
      },
    ],
  });

  await alert.present();
  };

  </script>
  
  <style scoped>
  .header-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  ion-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .text-content {
    display: flex;
    flex-direction: column;
  }
  
  .card-text {
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
  }
  
  .card-info {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  
  .button-group {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  
  ion-button {
    flex: 1 1 auto;
    min-width: 80px;
    max-width: calc(50% - 10px);
  }
  
  @media (min-width: 768px) {
    ion-button {
      max-width: calc(25% - 10px);
    }
  }
  </style>
  