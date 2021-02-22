require('./bootstrap');


import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



// We import JQuery
const $ = require('jquery');
// We declare it globally
window.$ = $;

Window.Event = new Vue({});

//Import User Class
import User from './helpers/User'
window.User = User

//Import Notification Class
import Notification from './helpers/Notification'
window.Notification = Notification

// import Topbar from './components/topbar.vue'
// Vue.component('top-bar', Topbar)

import Topbar from './components/topbar.vue'
Vue.component('top-bar', Topbar)

import VideoBackground from 'vue-responsive-video-background-player'
Vue.component('video-background', VideoBackground)

import LeftSideBar from './components/leftsidebar.vue'
//Vue.component('left-sidebar', LeftSideBar)

import LayoutArea from './components/layout.vue'
Vue.component('layout-area', LayoutArea)

// For Home Page
import BlogArea from './components/home/blog.vue'
Vue.component('blog-area', BlogArea)

import AboutUs from './components/home/aboutUs.vue'
Vue.component('about-us', AboutUs)

import Counter from './components/home/counter.vue'
Vue.component('counter-area', Counter)

import Category from './components/home/category.vue'
Vue.component('category-area', Category)

import Mapp from './components/home/map.vue'
Vue.component('map-area', Mapp)

import Achievement from './components/home/achievement.vue'
Vue.component('achievement-area', Achievement)

import Partner from './components/home/partner.vue'
Vue.component('partner-area', Partner)

import TabArea from './components/home/tab.vue'
Vue.component('tab-area', TabArea)

import FooterAtea from './components/footer.vue'
Vue.component('footer-area', FooterAtea)

//SweetAlert Start
import Swal from 'sweetalert2'
window.Swal = Swal

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    // timerProgressBar: true,
    // onOpen: (toast) => {
    //   toast.addEventListener('mouseenter', Swal.stopTimer)
    //   toast.addEventListener('mouseleave', Swal.resumeTimer)
    // }
})
window.Toast = Toast
//End SweetAlert

import Pagination from 'laravel-vue-pagination'
Vue.component('pagination', Pagination)

//Vue.component('pagination', require('laravel-vue-pagination'));

//Vue.component('paginate', VuejsPaginate)


import { routes } from './routes'
const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    el: '#app',
    router
})