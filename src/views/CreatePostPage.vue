<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonBackButton defaultHref="/main" />
                <IonTitle>Create Post</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size="12" size-md="6">

                    </IonCol>
                    <IonCol size="12" size-md="6">

                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="12" size-md="6">
                        
                    </IonCol>
                    <IonCol size="12" size-md="6">
                        
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>    
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, 
IonBackButton, IonButton, IonButtons, IonGrid, IonRow, IonCol } from '@ionic/vue';
</script>

<style scoped>
</style>