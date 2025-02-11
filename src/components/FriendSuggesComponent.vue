<template>
    <div class="avatar-container">
      <div class="avatar-and-name">
        <ion-avatar>
          <img src="https://via.placeholder.com/150" alt="Avatar">
        </ion-avatar>
        <span class="name">{{ name }}</span>
      </div>
      <div class="buttons">
        <ion-button @click="onAddFriendClick">Enviar solicitud</ion-button>
        <ion-button @click="onSuprimirClick">Suprimir</ion-button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { IonAvatar, IonButton } from '@ionic/vue';
  
  // Definir las props con TypeScript
  const props = defineProps<{
    name: string;
  }>();
  
  // Métodos para manejar los clics de los botones
  const onAddFriendClick = () => {
    alert("Solicitud de amistad enviada");
  };
  
  const onSuprimirClick = () => {
    alert("Se ha suprimido esta sugerencia");
  };
  </script>
  
  <style scoped>
  .avatar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .avatar-and-name {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .avatar-and-name ion-avatar {
    margin-right: 8px;
  }
  
  .name {
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  </style>