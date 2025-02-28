import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';
import { addIcons } from 'ionicons';
import { sendOutline,
  peopleOutline,  
  person, 
  chatboxEllipsesOutline, 
  homeOutline,
  notificationsOutline,
  menuOutline, 
  chatbubbleEllipsesOutline,
  heartOutline,
  heart,
  flagOutline,
  shareSocialOutline,
  barChartOutline,
  helpCircleOutline,
  logOutOutline,
  informationCircleOutline,
  imageOutline,
  addCircleOutline,
  trashOutline,
  createOutline,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoWhatsapp,
} from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Import de mis temas personalizados*/
import '@/theme/global.css';


/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
/*import '@ionic/vue/css/palettes/dark.system.css';*/

/* Theme variables */
import './theme/variables.css';

addIcons({
  'send-outline': sendOutline,
  'people-outline': peopleOutline,
  'person': person,
  'chatbox-ellipses-outline': chatboxEllipsesOutline,
  'home-outline': homeOutline,
  'notifications-outline': notificationsOutline,
  'menu-outline': menuOutline,
  'chatbubble-ellipses-outline': chatbubbleEllipsesOutline,
  'heart-outline': heartOutline,
  'heart': heart,
  'flag-outline': flagOutline,
  'share-social-outline': shareSocialOutline,
  'bar-chart-outline': barChartOutline,
  'help-circle-outline': helpCircleOutline,
  'log-out-outline': logOutOutline,
  'information-circle-outline': informationCircleOutline,
  'image-outline': imageOutline,
  'add-circle-outline': addCircleOutline,
  'logo-facebook': logoFacebook,
  'logo-instagram': logoInstagram,
  'logo-twitter': logoTwitter,
  'logo-whatsapp': logoWhatsapp,
  'trash-outline': trashOutline,
  'create-outline': createOutline,
});

const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
