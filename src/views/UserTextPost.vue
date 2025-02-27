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

    <ion-content class="content-container ion-padding">
      <div class="profile-container">
        <ion-avatar class="avatar">
          <img src="https://ionicframework.com/docs/demos/api/list/avatar-han.png" alt="Avatar" />
        </ion-avatar>
        <div class="text-content">
          <h3>Han Solo</h3>
          <small>1 de Febrero de 2025 20:50h</small>
        </div>
        <div class="socials">
          
        </div>
      </div>
      <div class="text-view">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices magna leo, sit amet mollis lacus varius non. 
        Praesent vel ipsum et lacus tincidunt tincidunt. Nam interdum urna diam, eu laoreet orci interdum vitae. 
        Nullam congue metus at mi dignissim ornare. Curabitur non consectetur massa. Nam eget erat non est egestas malesuada vitae a nulla. 
        Praesent eget nibh laoreet, vestibulum arcu eget, feugiat ex. 
        Donec rutrum arcu condimentum cursus facilisis. Donec convallis, justo eget dapibus efficitur, lacus est pharetra sem, non gravida mauris ipsum non arcu. 
        Vestibulum ornare nunc sit amet lacus dictum, at tempus dolor luctus. Sed gravida convallis lacinia. Nam fermentum sodales nibh, non laoreet leo pretium eu.
        Vestibulum mi elit, blandit at felis non, cursus gravida libero. 
      </div>
      
      <!-- Zona de comentarios de otros usuarios -->

      <ion-list lines="none" class="comment-list">
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
        <UserComment
          avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
          name="Han Solo"
          text="Este es otro ejemplo de comentario"
        />
        <UserComment
          avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
          name="Han Solo"
          text="Este es otro ejemplo de comentario"
        />
        <UserComment
          avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
          name="Han Solo"
          text="Este es otro ejemplo de comentario"
        />
        <UserComment
          avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
          name="Han Solo"
          text="Este es otro ejemplo de comentario"
        />
        <UserComment
          avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
          name="Han Solo"
          text="Este es otro ejemplo de comentario"
        />
        <UserComment
          avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
          name="Han Solo"
          text="Este es otro ejemplo de comentario"
        />
        <UserComment
          avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
          name="Han Solo"
          text="Este es otro ejemplo de comentario"
        />
        <UserComment
          avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
          name="Han Solo"
          text="Este es otro ejemplo de comentario"
        />
        <UserComment
          avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
          name="Han Solo"
          text="Este es otro ejemplo de comentario"
        />
        <UserComment
          avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
          name="Han Solo"
          text="Este es otro ejemplo de comentario"
        />
        <!-- Agrega más UserComment según sea necesario -->
      </ion-list>
    </ion-content>
    <ion-footer class="footer-item">
      <ion-item>
        <ion-avatar slot="start">
          <img src="https://ionicframework.com/docs/demos/api/list/avatar-han.png" />
        </ion-avatar>
        <ion-input placeholder="Escribe un comentario..."></ion-input>
        <ion-icon slot="end" icon="send-outline"></ion-icon>
      </ion-item>
    </ion-footer>
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
IonList,
IonItem,
IonInput,
IonIcon,
IonFooter
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
.profile-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.text-content {
  display: flex;
  flex-direction: column;
}

.text-view {
  width: 100%;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  border-color: antiquewhite;
  color: #333;
  text-align: justify;
}
.content-container {
  display: flex;
  flex-direction: column;
  height: calc(100% - 56px); /* Ajusta el tamaño del contenido para dejar espacio al ion-footer */
}

.comment-list {
  flex: 1;
  overflow-y: auto;
}

.footer-item {
  position: fixed;
  bottom: 0;
  width: 100%;
}

</style>