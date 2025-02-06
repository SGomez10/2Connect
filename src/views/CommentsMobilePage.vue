<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title>Comentarios</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content>
        <ion-item>
            <ion-avatar slot="start">
              <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" alt="Avatar">
            </ion-avatar>
            <ion-input type="text" placeholder="Escribe aquí tu comentario sobre el post" class="ion-padding-start"></ion-input>
        </ion-item>

        <!-- Zona de comentarios de otros usuarios -->

        <ion-list lines="none">
          <UserComment
            avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"
            name="Finn"
            text="Este es un ejemplo de comentario"
          />
          <UserComment
            avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
            name="Han Solo"
            text="Este es otro ejemplo de comentario"
          />
          <!-- Agrega más UserComment según sea necesario -->
        </ion-list>
        
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">

    import { IonPage, 
        IonHeader, 
        IonToolbar, 
        IonTitle, 
        IonContent, 
        IonAvatar,
        IonItem,
        IonList, 
        IonInput,
        IonBackButton,
        IonButtons 
    } from '@ionic/vue';

    import UserComment from '@/components/UserComment.vue';
    
  </script>

  <style scoped></style>