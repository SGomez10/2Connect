<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Comentarios</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-label position="floating">Escribe un comentario</ion-label>
                <ion-input type="text" value="Escribe aquí tu comentario..."></ion-input>
              </ion-item>
              <ion-button>Enviar</ion-button>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-list>
                <ion-item>
                  <ion-label>
                    <h2>Juan</h2>
                    <p>Este es un comentario de ejemplo</p>
                  </ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>
                    <h2>Maria</h2>
                    <p>Este es otro comentario de ejemplo</p>
                  </ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>
                    <h2>Pedro</h2>
                    <p>Este es un comentario más</p>
                  </ion-label>
                </ion-item>
              </ion-list>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
    import { IonPage, 
        IonHeader, 
        IonToolbar, 
        IonTitle, 
        IonContent, 
        IonGrid, 
        IonRow, 
        IonCol, 
        IonItem, 
        IonLabel, 
        IonInput, 
        IonList, 
        IonButton 
    } from '@ionic/vue';
  </script>

  <style scoped></style>