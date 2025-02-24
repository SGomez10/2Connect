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
                        <ion-label>Cómo enviar un mensaje privado</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                        <h3>Instrucciones para crear enviar un mensaje privado</h3>
                        <p>En esta guía te vamos a enseñar paso a paso como poder enviar un mensaje privado a cualquier persona que tengas agregada en tu lista de amigos.</p>
                        <h4>1. Acceder al menú de amigos</h4>
                        <p>Des de el menú principal, vamos a buscar en la barra superior el icono de amigos, que es el segundo icono desde la izquierda, y lo vamos a pulsar. Te marcaremos el botón a continuación</p>
                        <ion-icon name="people-outline"></ion-icon>
                        <h4>2. Buscar tu lista de amigos</h4>
                        <p>Dentro del menú, vamos a ver unos botones que se pueden desplazar arrastrando hacia los lados. Vamos a arrastrar hasta encontrar el botón que pone “Tus amigos”. Te mostraremos como se ve a continuación</p>
                        <h4>3. Selecciona alguien de la lista</h4>
                        <p>Dentro de “Tus amigos” va a aparecer una lista de todas las personas que tienes agregadas. Una vez hayas encontrado a la persona que escribir, debes pulsar el botón de la derecha del todo. Te vamos a mostrar cuál es a continuación</p>
                        <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                        <h4>4. Escribe tu mensaje</h4>
                        <p>Una vez pulsado, estarás dentro de la sala de chat privada con tu contacto deseado. En la parte inferior de la pantalla habrá una barra blanca la cual al clicar te abrirá el teclado para poder escribir. Una vez abierto puedes escribir lo que quieras y mandárselo a tu amigo/a. ¡Con eso, ya sabes escribir a tus amigos!</p>
                    </div>
                </ion-accordion>
                <ion-accordion value="second">
                    <ion-item slot="header" color="light">
                        <ion-label>Cómo eliminar mi cuenta 2Connect</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">Tutorial 2</div>
                </ion-accordion>
                <ion-accordion value="third">
                    <ion-item slot="header" color="light">
                        <ion-label>Cómo añadir amigos</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">Tutorial 3</div>
                </ion-accordion>
                <ion-accordion value="fourth">
                    <ion-item slot="header" color="light">
                        <ion-label>Cómo crear un post</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">Tutorial 4</div>
                </ion-accordion>
                <ion-accordion value="fifth">
                    <ion-item slot="header" color="light">
                        <ion-label>Cómo eliminar un post</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">Tutorial 5</div>
                </ion-accordion>
                <ion-accordion value="sixth">
                    <ion-item slot="header" color="light">
                        <ion-label>Cómo eliminar a una persona de amigos</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">Tutorial 6</div>
                </ion-accordion>
                <ion-accordion value="seventh">
                    <ion-item slot="header" color="light">
                        <ion-label>Cómo compartir un post</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">Tutorial 7</div>
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