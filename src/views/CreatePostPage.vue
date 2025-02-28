<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <ion-buttons slot="start">
                    <IonBackButton defaultHref="/main" />               
                </ion-buttons>
                <IonTitle>Crear Post</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
            <IonGrid>
                <IonRow>
                    <IonCol size="12" size-md="6">
                        <h3>Media</h3>
                        <p>Selecciona una imagen o video desde tu dispositivo para publicar</p>
                        <div class="media-placeholder"></div>
                        <ion-button expand="block" fill="clear" color="primary" shape="round">Añadir media</ion-button>
                    </IonCol>
                    <IonCol size="12" size-md="6">
                        <h3>Descripción</h3>
                        <p>Aquí dentro puedes escribir una breve descripción de la publicación, o lo que te pase por la cabeza,
                            ¡no hay límites!
                        </p>
                        <textarea class="description-textarea" placeholder="Escribe tu descripción aquí..."></textarea>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="12" size-md="6">
                        <h3>Privacidad</h3>
                        <p>Selecciona la privacidad de tu publicación</p>
                        <IonSelect label="outline select" placeholder="Selecciona una opción">
                            <IonSelectOption value="publico">Público</IonSelectOption>
                            <IonSelectOption value="solo-amigos">Solo amigos</IonSelectOption>
                            <IonSelectOption value="privado">Privado</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                    <IonCol size="12" size-md="6">
                        
                    </IonCol>
                </IonRow>
            </IonGrid>
            <div class="btn-container">
                <IonButton expand="block" color="primary" shape="round" @click="navigateTo('/main')">Publicar</IonButton>
            </div>
        </IonContent>
    </IonPage>    
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, 
IonBackButton, IonButton, IonButtons, IonGrid, IonRow, IonCol, IonSelectOption, IonSelect } from '@ionic/vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateTo = (path: string) => {
    router.push(path);
}

</script>

<style scoped>
    .media-placeholder {
        width: 100%;
        height: 200px;
        border: 2px dashed #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }

    .description-textarea {
        width: 100%;
        height: 150px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 10px;
        margin-top: 10px;
        resize: none;
    }
</style>