<template>
  <router-link :to="link" class="no-underline">
    <ion-item class="c-bg">
      <ion-avatar slot="start">
        <img :src="avatarSrc" />
      </ion-avatar>
      <ion-label class="c-bg">
        <h2>{{ name }}</h2>
        <p class="small-text">{{ text }}</p>
      </ion-label>
      <ion-icon name="chatbubble-ellipses-outline" slot="end" @click.stop="goToChat"></ion-icon>
    </ion-item>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  link: {
    type: String,
    required: true
  },
  avatarSrc: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  chatLink: {
    type: String,
    required: false,
    default: '/chat/1' // Página de chat por defecto
  }
});

const router = useRouter();

const goToChat = (event: Event) => {
  event.preventDefault(); // Evita que el router-link se active al hacer clic en el ícono
  router.push(props.chatLink);
};
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
.c-bg {
  --background: var(--ion-background-color);
}
.small-text {
  font-size: 0.8em;
  color: var(--ion-color-medium);
}
ion-icon {
  font-size: 1.5em;
  cursor: pointer;
}
</style>
