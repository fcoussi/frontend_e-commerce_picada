
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'Inicio',
      component: () => import('../views/Inicio.vue')
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('../views/Menu.vue')
    },
    {
      path: '/hubicacion',
      name: 'Hubicacion',
      component: () => import('../views/Hubicacion.vue')
    },
    {
      path: '/nosotros',
      name: 'Nosotros',
      component: () => import('../views/Nosotros.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/Admin.vue')
    },
    {
      path: '/carro-compras',
      name: 'CarroCompras',
      component: () => import('../views/CarroCompras.vue')

    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue')

    },
    {
      path: '/adminProducto',
      name: 'AdministracionProducto',
      component: () => import('../views/AdministracionProducto.vue')

    },

  ]


})

export default router
