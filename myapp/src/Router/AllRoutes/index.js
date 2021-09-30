import { lazy } from 'react'

const routes = [
  {
    path: '/',
    component: lazy(() => import('../../Pages/Login/')),
    name: 'login',
    exact: true,
    isPrivate: true
  },
  {
  path: '/cadastro',
  component: lazy(() => import('../../Pages/Register/')),
    name: 'cadastro',
      exact: true,
        isPrivate: true
  },
]

export default routes
