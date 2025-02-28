<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/main"></ion-back-button>
                </ion-buttons>
                <ion-title>Solicitudes de amistad</ion-title>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonList class="bg-transparent" lines="none">
                <FriendReqComponent avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png" name="Han Solo" />
                <FriendReqComponent avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-leia.png" name="Leia Organa" />
                <FriendReqComponent avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-luke.png" name="Luke Skywalker" />
            </IonList>
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
        IonList
    } from '@ionic/vue';

    import FriendReqComponent from '@/components/FriendReqComponent.vue';
</script>   

<style scoped> 
    .bg-transparent {
    background: transparent;
    }
</style>