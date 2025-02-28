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

      <div class="button-group">
        <ion-button fill="clear" @click="toggleLike" @click.stop>
          <ion-icon :icon="isLiked ? heart : heartOutline"></ion-icon>
          Me gusta
        </ion-button>
        <ion-button fill="clear" @click="handleCommentsClick" @click.stop>Comentar</ion-button>
        <ion-button fill="clear" @click="showShareModal" @click.stop>
          <ion-icon :icon="shareSocialOutline"></ion-icon>
          Compartir
        </ion-button>
        <ion-button fill="clear" @click="showReportAlert" @click.stop>
          <ion-icon :icon="flagOutline"></ion-icon>
          Reportar
        </ion-button>
      </div>
    </ion-card-content>
  </ion-card>

  <!-- Modal de Compartir -->
  <ion-modal :is-open="isShareModalOpen" @didDismiss="isShareModalOpen = false">
    <ion-content class="modal-content">
      <h3>Compartir en:</h3>
      <div class="share-buttons">
        <ion-button fill="clear" @click="shareOn('Facebook')">
          <ion-icon :icon="logoFacebook" color="primary"></ion-icon> Facebook
        </ion-button>
        <ion-button fill="clear" @click="shareOn('Twitter')">
          <ion-icon :icon="logoTwitter" color="primary"></ion-icon> Twitter
        </ion-button>
        <ion-button fill="clear" @click="shareOn('WhatsApp')">
          <ion-icon :icon="logoWhatsapp" color="success"></ion-icon> WhatsApp
        </ion-button>
        <ion-button fill="clear" @click="shareOn('Instagram')">
          <ion-icon :icon="logoInstagram" color="danger"></ion-icon> Instagram
        </ion-button>
      </div>
      <ion-button color="medium" expand="block" @click="isShareModalOpen = false">Cancelar</ion-button>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import { 
  IonCard, 
  IonCardHeader, 
  IonAvatar, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonImg, 
  IonButton,
  IonIcon,
  IonModal,
  IonContent
} from '@ionic/vue';

import { defineProps, ref } from 'vue';
import { PropType } from 'vue';
import { alertController } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { 
  heartOutline, 
  heart, 
  shareSocialOutline, 
  flagOutline, 
  logoFacebook, 
  logoTwitter, 
  logoWhatsapp, 
  logoInstagram 
} from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLiked = ref(false);
const isShareModalOpen = ref(false);

const toggleLike = () => {
  isLiked.value = !isLiked.value;
};

const showShareModal = () => {
  isShareModalOpen.value = true;
};

const shareOn = (platform: string) => {
  console.log(`Compartiendo en ${platform}`);
  isShareModalOpen.value = false;
};

const showReportAlert = async () => {
  const alert = await alertController.create({
    header: 'Reportar contenido',
    message: '¿Estás seguro de que deseas reportar este contenido?',
    buttons: [
      { text: 'Cancelar', role: 'cancel' },
      { text: 'Reportar', handler: async () => {
          const confirmAlert = await alertController.create({
            header: 'Reporte enviado',
            message: 'El reporte ha sido enviado con éxito.',
            buttons: [{ text: 'Aceptar' }],
          });
          await confirmAlert.present();
        }
      }
    ],
  });
  await alert.present();
};

const irAUsuario = () => {
  router.push('/friend-profile');
};

const esMovil = () => {
  return window.innerWidth <= 768;
};

const irAPost = () => {
  router.push(esMovil() ? '/post-mobile' : '/post');
};

const handleCommentsClick = () => {
  router.push(esMovil() ? '/comments' : '/post');
};

const props = defineProps({
  avatarSrc: String,
  nombreUser: String,
  desc: String,
  imageSrc: Array as PropType<string[]>,
  comments: Number,
  shares: Number
});
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
}

.swiper-container {
  width: 100%;
  height: 250px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.card-info {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 5px;
}

.modal-content {
  text-align: center;
  padding: 20px;
}

.share-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
