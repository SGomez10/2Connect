<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/main"></ion-back-button>
        </ion-buttons>
        <ion-title>Text Post</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-item lines="none" >
          <ion-avatar slot="start">
            <img src="https://ionicframework.com/docs/demos/api/list/avatar-han.png" alt="Avatar">
          </ion-avatar>
          <div class="text-content">
            <h3>Han Solo</h3>
            <small>1 de Febrero de 2025 20:50h</small>
          </div>
        </ion-item>
        <ion-card-content>
          <div class="textoPost">
            <p>Hola que tal todo</p>
          </div>
        </ion-card-content>
      </ion-card>
      
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
import { IonContent, 
IonHeader, 
IonPage, 
IonTitle, 
IonToolbar, 
IonBackButton, 
IonButtons, 
IonAvatar, 
IonItem,
IonCard,
IonCardHeader,
IonCardContent,
IonList,
} from '@ionic/vue';
import UserComment from '@/components/UserComment.vue';
</script>

<style scoped>
.text-content {
  display: flex;
  flex-direction: column;
}
.transparent-bg {
  background: transparent;
}

</style>