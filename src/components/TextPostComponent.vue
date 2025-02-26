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
          <ion-button fill="clear" @click.stop>
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
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  
  ion-button {
    flex: 1 1 auto;
    min-width: 80px;
    max-width: calc(50% - 10px);
  }
  
  @media (min-width: 768px) {
    ion-button {
      max-width: calc(25% - 10px);
    }
  }
  </style>
  