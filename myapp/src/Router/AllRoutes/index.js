import { lazy } from 'react'

const routes = [
  {
    path: '/',
    component: lazy(() => import('../../Pages/Login/')),
    name: 'index',
    exact: true,
    isPrivate: true
  },
]

export default routes
