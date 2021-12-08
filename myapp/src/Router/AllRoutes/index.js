import { lazy } from 'react'

const routes = [
  {
    path: '/',
    component: lazy(() => import('../../Pages/Login/')),
    name: 'login',
    exact: true,
    isPrivate: false
  },
  {
  path: '/cadastro',
  component: lazy(() => import('../../Pages/Register/')),
    name: 'cadastro',
    exact: true,
    isPrivate: false
  },
  {
    path: '/home',
    component: lazy(() => import('../../Pages/Home/')),
    name: 'home',
    exact: true,
    isPrivate: true
  },
  {
    path: '/hospitais',
    component: lazy(() => import('../../Pages/SelectHospital/')),
    name: 'hospitais',
    exact: true,
    isPrivate: true
  }
]

export default routes
