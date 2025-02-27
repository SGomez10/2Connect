<template>
    <ion-card>
      <ion-card-header  @click="irAUsuario" style="cursor: pointer;">
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
        <p class="card-text">{{ contentText }}</p>
        <div class="card-info">
          <p>{{ comments }} Comentarios</p>
          <p>{{ shares }} Compartidos</p>
        </div> 
        <!-- Contenedor para los botones con flexbox para mantenerlos dentro del card -->
        <div class="button-group">
          <ion-button fill="clear" @click="toggleLike" @click.stop>
            <ion-icon :icon="isLiked ? heart : heartOutline"></ion-icon>
            Me gusta
          </ion-button>
          <ion-button fill="clear" @click="handleCommentsClick" @click.stop>Comentar</ion-button>
          <ion-button fill="clear"  @click="showShareAlert" @click.stop>
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
  import { alertController, toastController } from '@ionic/vue';
  import { 
    IonCard, 
    IonCardHeader, 
    IonAvatar, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent, 
    IonButton,
    IonIcon 
  } from '@ionic/vue';
  import { heartOutline, heart, shareSocialOutline, flagOutline } from 'ionicons/icons';

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
      router.push('/text-post'); // Redirigir a la versión móvil
    } else {
      router.push('/text-post'); // Redirigir a la versión de escritorio
    }
  };

  const handleCommentsClick = () => {
    if (esMovil()) {
      router.push('/comments'); // Redirigir a la versión móvil
    } else {
      router.push('/text-post'); // Redirigir a la versión de escritorio
    }
  };

  const props = defineProps({
    avatarSrc: String,
    nombreUser: String,
    desc: String,
    contentText: String, //contenido del post escrito.
    comments: Number,
    shares: Number
  });

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

  import { defineProps, ref } from 'vue';
  const isLiked = ref(false);

  const toggleLike = () => {
    isLiked.value = !isLiked.value;
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
  
  .text-content {
    display: flex;
    flex-direction: column;
  }
  
  .card-text {
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
  }
  
  .card-info {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  
  .button-group {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
  }
  
  @media (min-width: 768px) {
    ion-button {
      max-width: calc(25% - 10px);
    }
  }
  </style>
  