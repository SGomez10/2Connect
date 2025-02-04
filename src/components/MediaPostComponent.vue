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
      <ion-img :src="imageSrc"></ion-img>
      <div class="card-info">
        <p>{{ comments }} Comentarios</p>
        <p>{{ shares }} Compartidos</p>
      </div>
      
      <!-- Contenedor para los botones con flexbox para mantenerlos dentro del card -->
      <div class="button-group">
        <ion-button fill="clear">Me gusta</ion-button>
        <ion-button fill="clear">Comentar</ion-button>
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
  IonImg, 
  IonButton 
} from '@ionic/vue';

const props = defineProps({
  avatarSrc: String,
  nombreUser: String,
  desc: String,
  imageSrc: String,
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

.card-info {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.button-group {
  margin-top: 10px;
  display: flex;
  justify-content: center; /* Centra los botones en el card */
  gap: 10px;
  flex-wrap: wrap; /* Permite que los botones se ajusten si no caben en una sola línea */
}

ion-button {
  flex: 1 1 auto; /* Permite que los botones crezcan y se ajusten según el espacio */
  min-width: 80px; /* Reduce el ancho mínimo para mejorar la adaptación en móviles */
  max-width: calc(50% - 10px); /* Asegura que no ocupen más del 50% del ancho en móviles */
}

@media (min-width: 768px) {
  ion-button {
    max-width: calc(25% - 10px); /* En pantallas grandes, los botones ocuparán un 25% del contenedor */
  }
}
</style>
