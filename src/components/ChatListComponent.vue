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
      </ion-item>
    </router-link>
  </template>
  
  <script setup lang="ts">
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
    }
  });
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
  </style>