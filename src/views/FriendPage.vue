<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Amigos</ion-title>
            </IonToolbar>
        </IonHeader>

        <IonContent class="ion-padding">

            <h3>Amigos</h3>
            <IonList class="bg-transparent no-lines">
                <FriendComponent link="/friend-profile" avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-han.png" name="Han Solo" text="Piloto de la nave Millennium Falcon" />
                <FriendComponent link="/friend-profile" avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-leia.png" name="Leia Organa" text="En linea" />
                <FriendComponent link="/friend-profile" avatarSrc="https://ionicframework.com/docs/demos/api/list/avatar-luke.png" name="Luke Skywalker" text="En linea" />
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

    import FriendComponent from '@/components/FriendComponent.vue';

</script>

<style scoped>
    .bg-transparent {
    background: transparent;
    }
</style>