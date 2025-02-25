<template>
<ion-card>
  <ion-card-header @click="irAUsuario" style="cursor: pointer;">
    <div class="header-content">
      <ion-avatar>
        <img :src="avatarSrc" alt="Avatar">
      </ion-avatar>
      <div class="text-content">
        <ion-card-title>{{ nombreUser }}</ion-card-title>
        <ion-card-subtitle>{{ desc }}</ion-card-subtitle>
      </div>
    </div>
  </ion-card-header>

  <ion-card-content @click="irAPost" style="cursor: pointer;">
    <!-- Swiper para múltiples imágenes -->
    <swiper
      :modules="[Pagination]"
      :pagination="{ clickable: true }"
      class="swiper-container">
      <swiper-slide v-for="(img, index) in (Array.isArray(imageSrc) ? imageSrc : [imageSrc]).slice(0, 3)" :key="index">
        <ion-img :src="img"></ion-img>
      </swiper-slide>
    </swiper>

    <div class="card-info">
      <p>{{ comments }} Comentarios</p>
      <p>{{ shares }} Compartidos</p>
    </div>

    <!-- Contenedor para los botones -->
    <div class="button-group">
      <ion-button fill="clear" @click="toggleLike" @click.stop>
        <ion-icon :icon="isLiked ? heart : heartOutline"></ion-icon>
        Me gusta
      </ion-button>
      <ion-button fill="clear" @click="handleCommentsClick" @click.stop>Comentar</ion-button>
      <ion-button fill="clear" @click.stop>Compartir</ion-button>
      <ion-button fill="clear" @click="showReportAlert" @click.stop>Reportar</ion-button>
    </div>
  </ion-card-content>
</ion-card>
</template>

<script setup lang="ts">

import { alertController, toastController } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { heartOutline, heart } from 'ionicons/icons';

import { 
  IonCard, 
  IonCardHeader, 
  IonAvatar, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonImg, 
  IonButton,
  IonPage,
  IonContent 
} from '@ionic/vue';

import { defineProps, ref } from 'vue';
import { PropType } from 'vue';

const props = defineProps({
  avatarSrc: String,
  nombreUser: String,
  desc: String,
  imageSrc: Array as PropType<string[]>,
  comments: Number,
  shares: Number
});

const isLiked = ref(false);

const toggleLike = () => {
  isLiked.value = !isLiked.value;
};

const showReportAlert = async () => {
  const alert = await alertController.create({
    header: 'Reportar contenido',
    message: '¿Estás seguro de que deseas reportar este contenido?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'Reportar',
        handler: async () => {
          const confirmAlert = await alertController.create({
            header: 'Reporte enviado',
            message: 'El reporte ha sido enviado con éxito.',
            buttons: [
              {
                text: 'Aceptar',
                handler: () => {
                  console.log('Reporte confirmado');
                },
              },
            ],
          });
          await confirmAlert.present();
        },
      },
    ],
  });

  await alert.present();
  };

  import { useRouter } from 'vue-router';

const router = useRouter();

const irAUsuario = () => {
  router.push('/friend-profile'); // Redirige a la página de perfil del usuario
};

const esMovil = () => {
  return window.innerWidth <= 768; // Se considera móvil si el ancho es menor o igual a 768px
};

const irAPost = () => {
  if (esMovil()) {
    router.push('/post-mobile'); // Redirigir a la versión móvil
  } else {
    router.push('/post'); // Redirigir a la versión de escritorio
  }
};

const handleCommentsClick = () => {
  if (esMovil()) {
    router.push('/comments'); // Redirigir a la versión móvil
  } else {
    router.push('/post'); // Redirigir a la versión de escritorio
  }
};

</script>

<style scoped>
.header-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

ion-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.swiper-slide ion-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Asegura que las imágenes se ajusten y no se deformen */
}

.text-content {
  display: flex;
  flex-direction: column;
}

.card-info {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.swiper-container {
  width: 100%;
  height: 250px; /* Ajusta el tamaño según lo necesites */
}

.swiper-slide ion-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.button-group {
  margin-top: 10px;
  display: flex;
  justify-content: center; /* Centra los botones en el card */
  gap: 10px;
  flex-wrap: wrap; /* Permite que los botones se ajusten si no caben en una sola línea */
}

ion-button {
  flex: 1 1 auto; /* Permite que los botones crezcan y se ajusten según el espacio */
  min-width: 80px; /* Reduce el ancho mínimo para mejorar la adaptación en móviles */
  max-width: calc(50% - 10px); /* Asegura que no ocupen más del 50% del ancho en móviles */
}

@media (min-width: 768px) {
  ion-button {
    max-width: calc(25% - 10px); /* En pantallas grandes, los botones ocuparán un 25% del contenedor */
  }
}
</style>
