import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap"

import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import InicioPage from '@/pages/InicioPage.vue'
import VerPage from '@/pages/VerPage.vue'
import CrearPage from '@/pages/Hotels/CrearPage.vue'
import HabitacionesPage from '@/pages/HabitacionesPage.vue'
import AcomodacionesPage from '@/pages/AcomodacionesPage.vue'
import HotelDetalle from '@/pages/Hotels/HotelDetalle.vue'
import ListHabit from '@/pages/habitaciones/listHabit.vue'
import crearHabit from '@/pages/habitaciones/crearHabit.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name:'InicioPage', component: InicioPage},
        { path: '/ver', name:'VerPage', component: VerPage},
        { path: '/crear', name:'CrearPage', component: CrearPage},
        { path: '/tipo', name:'HabitacionesPage', component: HabitacionesPage},
        { path: '/acomd', name:'AcomodacionesPage', component: AcomodacionesPage},
        { path: '/dethot/:id', name:'HotelDetalle', component: HotelDetalle},
        { path: '/habitList/:id', name:'ListHabit', component: ListHabit},
        { path: '/habitCrear/:id', name:'crearHabit', component: crearHabit},
    ]
})


createApp(App)
.use(router)
.mount('#app')
