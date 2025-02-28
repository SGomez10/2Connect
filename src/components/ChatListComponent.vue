<template>
    <router-link :to="link" class="no-underline">
      <ion-item>
        <ion-avatar slot="start">
          <img :src="avatarSrc" />
        </ion-avatar>
        <ion-label>
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

  .small-text {
    font-size: 0.8em;
    color: var(--ion-color-medium);
  }
  </style>