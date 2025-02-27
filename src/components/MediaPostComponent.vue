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
        <ion-button fill="clear" @click="showShareAlert" @click.stop>
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
    IonToast,
    IonIcon 
  } from '@ionic/vue';
  
  import { defineProps, computed, ref } from 'vue';
  import { PropType } from 'vue';
  import { alertController } from '@ionic/vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper/modules';
  import { heartOutline, heart, shareSocialOutline, flagOutline, logoFacebook, logoTwitter, logoWhatsapp, logoInstagram } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const isLiked = ref(false);

  const toggleLike = () => {
    isLiked.value = !isLiked.value;
  };
  
  const showShareAlert = async () => {
  const alert = await alertController.create({
    header: 'Compartir en:',
    buttons: [
      {
        text: 'Facebook',
        handler: () => console.log('Compartir en Facebook'),
        cssClass: 'custom-icon-button facebook'
      },
      {
        text: 'Twitter',
        handler: () => console.log('Compartir en Twitter'),
        cssClass: 'custom-icon-button twitter'
      },
      {
        text: 'WhatsApp',
        handler: () => console.log('Compartir en WhatsApp'),
        cssClass: 'custom-icon-button whatsapp'
      },
      {
        text: 'Instagram',
        handler: () => console.log('Compartir en Instagram'),
        cssClass: 'custom-icon-button instagram'
      },
      {
        text: 'Cancelar',
        role: 'cancel',
      }
    ],
    cssClass: 'custom-share-alert'
  });
  await alert.present();
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

.custom-icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
  </style>