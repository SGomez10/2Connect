<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>2Connect</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-grid class="grid-container">
                <ion-row class="ion-justify-content-center ion-align-items-center">
                    <!-- Columna del Formulario -->
                    <ion-col size="12" size-md="6" size-lg="4">
                        <div class="form-container">
                            <h1 class="center-text">Bienvenido</h1>
                            <h3 class="center-text">Inicia sesión para continuar</h3>
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
                            <ion-button expand="block" shape="round" @click="goToMain">Login</ion-button>
                            <div class="register-link" @click="goToRegister">
                                ¿No tienes cuenta? <span class="clickable-text">Regístrate aquí</span>
                            </div>
                        </div>
                    </ion-col>
                    <!-- Columna de la Imagen (Solo en Desktop) -->
                    <ion-col size-md="6" size-lg="4" class="image-container">
                        <ion-img src="../public/MediaImages/friends.jpg" alt="Login Image"></ion-img>
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
    IonImg,
    useIonRouter
} from '@ionic/vue';

const router = useIonRouter();

const goToMain = () => {
    router.push('/main');
};

const goToRegister = () => {
    router.push('/register');
};
</script>

<style scoped>
.checkbox-container {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 16px;
    margin-bottom: 16px;
    font-size: small;
}

.checkbox-container ion-checkbox {
    --size: 16px;
    margin-right: 8px;
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
    cursor: pointer;
}

.register-link .clickable-text {
    color: var(--ion-color-primary);
    text-decoration: underline;
}

.image-container {
    display: none;
}

@media (min-width: 768px) {
    .image-container {
        display: block;
    }
}
</style>
