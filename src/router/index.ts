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
import UserDataPage from '@/views/UserDataPage.vue';
import AnonProfilePage from '@/views/AnonProfilePage.vue';
import FriendPage from '@/views/FriendPage.vue';
import FriendRequestMobilePage from '@/views/FriendRequestMobilePage.vue';
import HelpPage from '@/views/HelpPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
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
  },
  {
    path: '/user-data',
    name: 'UserData',
    component: UserDataPage
  },
  {
    path: '/friend-profile',
    name: 'FriendProfile',
    component: AnonProfilePage
  },
  {
    path: '/friend-request',
    name: 'FriendRequest',
    component: FriendRequestMobilePage
  },
  {
    path: '/friends/',
    name: 'Friend',
    component: FriendPage
  },
  {
    path: '/help',
    name: 'Help',
    component: HelpPage
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
