<template>
    <ion-item class="c-bg">
      <ion-avatar slot="start">
        <img :src="avatarSrc" />
      </ion-avatar>
      <ion-label class="c-bg">
        <h2>{{ name }}</h2>
        <div class="button-container">
          <ion-button @click="showAlertFriend('Si el usuario la acepta, aparecerá en tu lista de amigos')">Enviar Solicitud</ion-button>
          <ion-button @click="showAlertIgnore('No volveremos a mostrar a esta persona en tu lista de sugerencias')">Suprimir</ion-button>
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

const showAlertFriend = async (message: string) => {
  const alert = await alertController.create({
    header: 'Solicitud de amistad enviada',
    message,
    buttons: ['OK']
  });
  await alert.present();
};

const showAlertIgnore = async (message: string) => {
  const alert = await alertController.create({
    header: 'Se ha suprimido esta sugerencia',
    message,
    buttons: ['OK']
  });
  await alert.present();
};
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
.c-bg {
  --background: var(--ion-background-color);
}
.button-container {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}
</style>
