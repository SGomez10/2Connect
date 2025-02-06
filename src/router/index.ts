import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import EditProfilePage from '@/views/EditProfilePage.vue';
import ChatMenuPage from '@/views/ChatMenuPage.vue';
import ChatPage from '@/views/ChatPage.vue';
import MainPage from '@/views/MainPage.vue';
import NotificationsPage from '@/views/NotificationsPage.vue';
import CommentsMobilePage from '@/views/CommentsMobilePage.vue';
import FaqPage from '@/views/FaqPage.vue';
import FriendsMenuPage from '@/views/FriendsMenuPage.vue';
import MyProfilePage from '@/views/MyProfilePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {

    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/edit-profile',
    name: 'EditProfile',
    component: EditProfilePage
  },
  {
    path: '/chat-menu',
    name: 'ChatMenu',
    component: ChatMenuPage
  },
  {
    path: '/chat/:id',
    name: 'Chat',
    component: ChatPage
  },
  {
    path: '/main',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: NotificationsPage
  },
  {
    path: '/comments',
    name: 'Comments',
    component: CommentsMobilePage
  },
  {
    path: '/faq',
    name: 'Faq',
    component: FaqPage
  },
  {
    path: '/friends-menu',
    name: 'FriendsMenu',
    component: FriendsMenuPage
  },
  {
    path: '/my-profile',
    name: 'MyProfile',
    component: MyProfilePage
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
