<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col size="8">
              <ion-img v-if="!showSwiper" :src="images[currentIndex]" alt="Imagen" @click="showSwiper = true"></ion-img>
  
              <swiper v-if="showSwiper" :modules="modules" :pagination="{ clickable: true }" :navigation="true">
                <swiper-slide v-for="(img, index) in images" :key="index">
                  <img :src="img" @click="closeSwiper" style="width: 100%; cursor: pointer;" />
                </swiper-slide>
              </swiper>
            </ion-col>
  
            <ion-col size="4">
              <ion-item class="custom-item">
                <ion-avatar slot="start">
                  <img src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" alt="Avatar" />
                </ion-avatar>
                <div class="text-container">
                  <h3>Finn</h3>
                  <h5>30 de Marzo de 2024 15:36h</h5>
                </div>
              </ion-item>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper elit quis iaculis tristique. 
                Nullam mollis tempus arcu eu maximus. Vivamus auctor lorem eget dolor malesuada eleifend. Duis lacinia, neque vitae volutpat ultrices,
                magna augue tempor odio, consectetur pretium justo erat sit amet justo.
                Aenean mauris magna, ultricies ut consectetur a, venenatis in dolor. Cras rutrum nulla commodo nunc eleifend aliquet.
                Donec pellentesque non enim et mollis. Aenean laoreet nunc magna, at sagittis quam rutrum eu. 
              </p>
              <div class="buttons-container">
                <ion-button expand="block" fill="outline">Me gusta</ion-button>
                <ion-button expand="block" fill="outline">Compartir</ion-button>
              </div>
              <div class="comments-container">
                <h3>Comentarios</h3>
                <ion-list class="no-lines bg-transparent">
                  <UserComment avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" name="Finn" text="Este es un ejemplo de comentario" />
                  <UserComment avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png" name="Han Solo" text="Este es otro ejemplo de comentario" />
                </ion-list>  
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonImg,
    IonItem,
    IonAvatar,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonList 
  } from '@ionic/vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Pagination, Navigation } from 'swiper/modules';
  import UserComment from '@/components/UserComment.vue';

  const showSwiper = ref(false);
  const currentIndex = ref(0);
  const images = ref([
    '../../public/MediaImages/edificio.jpg',
    '../../public/MediaImages/puente.jpg',
    '../../public/MediaImages/mountain.jpg'
  ]);
  
  const modules = [Pagination, Navigation];
  
  const closeSwiper = () => {
    showSwiper.value = false;
  };
  </script>
  
  <style scoped>
    img {
      cursor: pointer;
    }
    
    /* Ajusta la alineación del avatar y los textos */
    .custom-item {
      display: flex;
      align-items: center;
    }
    
    /* Asegura que los textos estén alineados correctamente */
    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;
    }
    
    /* Separa el párrafo del ion-item */
    .description {
      margin-top: 10px;
    }

    .bg-transparent {
      background: transparent;
    }
  </style>
  