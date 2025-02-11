<template>
    <IonPage>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>FAQ</ion-title>
            </ion-toolbar>
        </ion-header>
        
        <IonContent>
            <IonSearchbar placeholder="Busca aquí tu pregunta"></IonSearchbar>
            <ion-accordion-group>
                <ion-accordion value="first">
                <ion-item slot="header" color="light">
                    <ion-label>¿Es la aplicación 2Connect gratuita?</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">Sí</div>
                </ion-accordion>
                <ion-accordion value="second">
                <ion-item slot="header" color="light">
                    <ion-label>¿Puedo eliminar mi cuenta en 2Connect?</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">Sí</div>
                </ion-accordion>
                <ion-accordion value="third">
                <ion-item slot="header" color="light">
                    <ion-label>¿2Connect está disponible en otros idiomas?</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">Sí</div>
                </ion-accordion>
            </ion-accordion-group>

        </IonContent>
    </IonPage>
</template>





<script setup lang="ts">
import { IonPage, 
    IonHeader,
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonAccordion, 
    IonAccordionGroup,
    IonLabel,
    IonItem, 
    IonBackButton,
    IonSearchbar,
    IonButtons
} from '@ionic/vue';

</script>











<style setup lang="ts">
</style>