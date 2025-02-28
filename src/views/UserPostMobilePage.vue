<template>
  <IonPage>
    <IonMenu side="end" content-id="main-content">
      <IonContent>
        <ion-list lines="none">
          <IonItem button @click="navigateTo('/create-post')">
            <IonIcon slot="start" name="create-outline"></IonIcon>
            Editar post
          </IonItem>
          <IonItem button @click="confirmDeletePost">
            <IonIcon slot="start" name="trash-outline"></IonIcon>
            Eliminar post
          </IonItem>
        </ion-list>
      </IonContent>
    </IonMenu>

    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/main"></IonBackButton>
        </IonButtons>
        <IonTitle>Mobile Post</IonTitle>
        <IonButtons slot="end">
          <ion-menu-toggle>
            <ion-button fill="clear">
              <ion-icon name="menu-outline"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent id="main-content" class="no-padding">
      <swiper
        :modules="[Pagination, Zoom]"
        :pagination="{ clickable: true }"
        :zoom="true"
        class="swiper-container"
      >
        <swiper-slide 
          v-for="(img, index) in images" 
          :key="index"
          class="swiper-slide"
        >
          <div 
            class="swiper-zoom-container"
            @mousedown="handleLongPress(img.description)"
            @mouseup="handleRelease"
            @touchstart="handleLongPress(img.description)"
            @touchend="handleRelease"
          >
            <img :src="img.src" class="swiper-image" />
          </div>
        </swiper-slide>
      </swiper>

      <!-- Texto flotante cuando se mantiene pulsado -->
      <div v-if="showText" class="overlay-text">
        {{ currentText }}
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonButtons, IonHeader, IonPage, IonToolbar, IonBackButton, IonTitle, 
IonMenu, IonList, IonItem, IonContent, IonMenuToggle, IonButton, IonIcon, alertController } from '@ionic/vue';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Zoom } from 'swiper/modules';
import { useRouter } from 'vue-router';

import 'swiper/css';
import 'swiper/css/pagination';

// Lista de imágenes con descripciones
const images = ref([
  { src: '../../public/MediaImages/edificio.jpg', description: 'Un edificio moderno' },
  { src: '../../public/MediaImages/puente.jpg', description: 'Un hermoso puente' },
  { src: '../../public/MediaImages/mountain.jpg', description: 'Una montaña nevada' }
]);

const showText = ref(false);
const currentText = ref('');

// Función para mostrar el texto cuando se mantiene pulsado
const handleLongPress = (description: string) => {
  showText.value = true;
  currentText.value = description;
};

// Función para ocultar el texto al soltar
const handleRelease = () => {
  showText.value = false;
};

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
}

const confirmDeletePost = async () => {
  const alert = await alertController.create({
    header: 'Confirmar',
    message: 'Se ha eliminado el post',
    buttons: [
      {
        text: 'Aceptar',
        handler: () => {
          navigateTo('/main');
        }
      }
    ]
  });

  await alert.present();
}
</script>

<style scoped>
/* Ajuste de padding y margen */
.no-padding {
  --padding-top: 0;
  --padding-bottom: 0;
}

/* Contenedor del Swiper */
.swiper-container {
  width: 100%;
  height: 100vh;
}

/* Configuración de imágenes */
.swiper-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Asegurar que el contenedor del zoom funcione */
.swiper-zoom-container {
  width: 100%;
  height: 100%;
}

/* Estilo del texto que aparece al mantener pulsado */
.overlay-text {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 16px;
  white-space: nowrap;
  z-index: 100;
  transition: opacity 0.3s ease-in-out;
}
</style>