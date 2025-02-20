<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Centro de ayuda</ion-title>
            </IonToolbar>
        </IonHeader>

        <IonContent class="ion-padding">

            <h3>¿Que es el centro de ayuda?</h3>
            <p class="ion-text-justify">El Centro de Ayuda de nuestra app es tu guía definitiva para aprovechar al máximo todas sus funciones. Aquí encontrarás tutoriales interactivos, preguntas frecuentes y videos explicativos que te enseñarán a navegar por la app de manera sencilla. Ya seas un usuario principiante o avanzado, nuestro contenido está diseñado para resolver tus dudas y mejorar tu experiencia. ¡Explora, aprende y saca el máximo provecho de nuestra aplicación!
            </p>
            <ion-accordion-group>
                <ion-accordion value="first">
                    <ion-item slot="header" color="light">
                        <ion-label>Cómo crear una cuenta 2Connect</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">First Content</div>
                </ion-accordion>
                <ion-accordion value="second">
                    <ion-item slot="header" color="light">
                        <ion-label>Cómo eliminar mi cuenta 2Connect</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">Second Content</div>
                </ion-accordion>
                <ion-accordion value="third">
                    <ion-item slot="header" color="light">
                        <ion-label>Cómo añadir amigos</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">Third Content</div>
                </ion-accordion>
            </ion-accordion-group>
        </IonContent>
        
    </IonPage>

</template>

<script setup lang="ts">
    import { IonHeader, 
        IonPage,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonContent, 
        IonItem,
        IonLabel,
        IonAccordion,
        IonAccordionGroup
    } from '@ionic/vue';

</script>

<style scoped>

    .bg-transparent {
    background: transparent;
    }

</style>