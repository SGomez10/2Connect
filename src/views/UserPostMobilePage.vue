<template>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/main"></IonBackButton>
          </IonButtons>
          <IonTitle>Mobile Post</IonTitle>
        </IonToolbar>
      </IonHeader>
  
      <IonContent class="no-padding">
        <swiper
          :modules="[Pagination]"
          :pagination="{ clickable: true }"
          class="swiper-container"
        >
          <swiper-slide v-for="(img, index) in images" :key="index">
            <img :src="img" class="swiper-image" />
          </swiper-slide>
        </swiper>
      </IonContent>
    </IonPage>
  </template>
  
  <script setup lang="ts">
  import { IonButtons, IonHeader, IonPage, IonToolbar, IonBackButton, IonTitle, IonContent } from '@ionic/vue';
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper/modules';
  
  import 'swiper/css';
  import 'swiper/css/pagination';
  
  const images = ref([
    '../../public/MediaImages/edificio.jpg',
    '../../public/MediaImages/puente.jpg',
    '../../public/MediaImages/mountain.jpg'
  ]);
  </script>
  
  <style scoped>
  /* Elimina los paddings/margins del IonContent */
  .no-padding {
    --padding-top: 0;
    --padding-bottom: 0;
  }
  
  /* Estilos para el Swiper */
  .swiper-container {
    width: 100%;
    height: 100vh; /* Ocupa toda la pantalla */
  }
  
  /* Las imágenes deben ocupar toda la pantalla */
  .swiper-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta la imagen sin deformarla */
  }
  </style>
  