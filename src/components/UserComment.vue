<template>
    <ion-item class="custom-item bg-transparent" lines="none">
      <ion-avatar slot="start">
        <img :src="avatarSrc" alt="Avatar" />
      </ion-avatar>
      <div class="content-box bg-transparent">
        <h3>{{ name }}</h3>
        <p>{{ text }}</p>
      </div>
    </ion-item>
  </template>
  
  <script setup lang="ts">
  import { IonItem, IonAvatar } from '@ionic/vue';
  
  defineProps<{
    name: string;
    text: string;
    avatarSrc: string;
  }>();
  </script>
  
  <style scoped>
  .custom-item {
    background: transparent !important;
    display: flex;
    align-items: center;
  }

  /* Fondo del recuadro en modo oscuro */
  .content-box {
    background: transparent !important;
    padding: 12px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1); /* Borde sutil */
  }

  ion-item {
    background: transparent !important;
    margin-top: 10px;
  }

  .bg-transparent {
    background: transparent;
  }


  /* Nombre en color blanco */
  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
  }

  /* Texto en gris claro */
  p {
    margin: 5px 0 0;
    font-size: 14px;
    color: #bbbbbb;
  }

</style>

  