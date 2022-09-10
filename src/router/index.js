
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'inicio',
      component: () => import('../views/Inicio.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/Menu.vue')
    },
    {
      path: '/hubicacion',
      name: 'hubicacion',
      component: () => import('../views/Hubicacion.vue')
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: () => import('../views/Nosotros.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin.vue')
    },
    {
      path: '/carro-compras',
      name: 'carroCompras',
      component: () => import('../views/CarroCompras.vue')

    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')

    },
    {
      path: '/adminProducto',
      name: 'administracionProducto',
      component: () => import('../views/AdministracionProducto.vue')

    },

  ]


})

export default router
