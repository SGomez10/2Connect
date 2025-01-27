<template>
    <ion-page>
        <ion-header :translucent="true">
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-img src="@/assets/icon.png" alt="App Icon" style="width: 30px; height: 30px; margin-left: 10px;"></ion-img>
                    </ion-buttons>
                    <ion-title>2Connect</ion-title>
                </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
            <ion-grid class="grid-container">
                <ion-row class="ion-justify-content-center ion-align-items-center">
                <ion-col size="12" size-md="6" size-lg="4">
                    <div class="form-container">
                        <h1 class="center-text">Bienvenido</h1>
                        <h3 class="center-text">Inicia sesión para continuar</h3>
                        <form>
                            <ion-item class="themed-item">
                            <ion-input label="Correo electrónico" label-placement="floating" placeholder="example@gmail.com"></ion-input>
                            </ion-item>
                            <ion-item class="themed-item">
                            <ion-input label="Contraseña" label-placement="floating" type="password" required></ion-input>
                            </ion-item>
                            <div class="checkbox-container">
                            <ion-checkbox></ion-checkbox>
                            <ion-label>Recuérdame</ion-label>
                            </div>
                            <ion-button type="submit" expand="block" shape="round">Login</ion-button>
                        </form>
                        <div class="register-link">
                            <ion-router-link href="#">¿No tienes cuenta? Regístrate aquí</ion-router-link>
                        </div>
                    </div>
                </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
    import { 
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonLabel,
        IonInput,
        IonItem, 
        IonButton, 
        IonButtons,
        IonCol,
        IonRow,
        IonGrid, 
        IonCheckbox,
        IonImg
    } from '@ionic/vue';
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
    .register-link {
        margin-top: 20px;
        text-align: center;
        font-size: small;
    }
</style>