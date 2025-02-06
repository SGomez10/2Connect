<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Bienvenida</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="container">
        <h1 class="title">2Connect</h1>
        <ion-button>Inicio</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';

</script>

<style>
.container {
  text-align: center;
  padding: 20px;
}

.logo {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>