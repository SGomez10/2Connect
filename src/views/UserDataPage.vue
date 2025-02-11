<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <slot name="start">
                    <IonBackButton></IonBackButton>
                </slot>
                <IonTitle>Información de usuario</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent class="ion-padding">
            <ion-grid>
                <ion-row>
                    <!-- 1-1 -->
                    <ion-col size="12" size-md="6">
                        <h3 class="text-center">tu tiempo en linea</h3>
                        <UserConnectionsChart />
                    </ion-col>

                    <!-- 1-2 -->
                    <ion-col size="12" size-md="6">
                        <UserInteractChart />
                    </ion-col>

                    <!-- 2-1 -->
                    <ion-col size="12" size-md="6">
                        <UserFriendsChart />
                    </ion-col>

                    <!-- 2-2 -->
                    <ion-col size="12" size-md="6">
                        <UserPostsChart />
                    </ion-col>
                </ion-row>
            </ion-grid>
        </IonContent>


    </IonPage>
</template>

<script setup lang="ts">

import { IonPage, 
    IonHeader,
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCol,
    IonRow,
    IonGrid, 
    IonBackButton
} from '@ionic/vue';

import UserConnectionsChart from '@/components/UserConnectionChart.vue';
import UserInteractChart from '@/components/UserInteractChart.vue';
import UserFriendsChart from '@/components/UserFriendsChart.vue';
import UserPostsChart from '@/components/UserPostsChart.vue';

</script>   

<style scoped>
</style>    