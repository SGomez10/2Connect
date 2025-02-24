<template>
    <ion-page>
        <ion-header :translucent="true">
            <IonToolbar>
                <IonTitle>2Connect</IonTitle>
            </IonToolbar>
        </ion-header>

        <IonContent :fullscreen="true" class="ion-padding">
            <ion-grid class="grid-container">
                <ion-row class="ion-justify-content-center ion-align-items-center">
                    <ion-col size="12" size-md="6" size-lg="4">
                        <div class="form-container">
                            <h2 class="center-text">Formulario de registro</h2>
                            <form>
                                <ion-item class="themed-item">
                                    <ion-input label="Nombre" label-placement="floating" placeholder="John"></ion-input>
                                </ion-item>
                                <ion-item class="themed-item">
                                    <ion-input label="Apellido" label-placement="floating" placeholder="Doe"></ion-input>
                                </ion-item>
                                <ion-item class="themed-item">
                                <ion-label position="stacked">Fecha de nacimiento</ion-label>
                                    <ion-input type="date" required></ion-input>
                                </ion-item>
                                <ion-item class="themed-item">
                                    <ion-input label="Número de teléfono" label-placement="floating" placeholder="+34 123456789"></ion-input>
                                </ion-item>
                                <ion-item class="themed-item">
                                    <ion-input label="Correo electrónico" label-placement="floating" placeholder="example@gmail.com"></ion-input>
                                </ion-item>
                                <ion-item class="themed-item">
                                    <ion-input label="Contraseña" label-placement="floating" type="password" required></ion-input>
                                </ion-item>
                                <ion-item class="themed-item">
                                    <ion-input label="Confirmar Contraseña" label-placement="floating" type="password" required></ion-input>
                                </ion-item>
                                <ion-button expand="block" shape="round" @click="goToMain">Registrarse</ion-button>
				                <div class="checkbox-container">
                                    <ion-checkbox></ion-checkbox>
                                     <ion-label>Acepto los términos y condiciones de 2Connect</ion-label>
                                </div>
                            </form>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>   
        </IonContent>
    </ion-page>
</template>

<script setup lang="ts">

    import {IonContent, 
        IonHeader, 
        IonPage, 
        IonTitle, 
        IonToolbar,
        IonLabel,
        IonCol,
        IonRow,
        IonGrid,
        IonInput,
        IonItem,
        IonButton,
        IonButtons,
        IonCheckbox,
        useIonRouter
    } from '@ionic/vue';

    const router = useIonRouter();

    const goToMain = () => {
    router.push('/edit-profile');
};

</script>

<style scoped>

    .checkbox-container {
        display: flex;
        align-items: center;
        margin-top: 10px;
        margin-left: 16px;
        margin-bottom: 16px;
        font-size: small
    }
    .checkbox-container ion-checkbox {
        --size: 16px; /* Reduce the size of the checkbox */
        margin-right: 8px; /* Add some space between checkbox and label */
    }

    .themed-item {
        --background: var(--ion-background-color);
        --color: var(--ion-text-color);
    }
    .center-text {
        text-align: center;
        width: 100%;
    }

</style>