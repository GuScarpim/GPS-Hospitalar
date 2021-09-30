import { lazy } from 'react'

const routes = [
  {
    path: '/',
    component: lazy(() => import('../../Pages/Home/')),
    name: 'index',
    exact: true,
    isPrivate: true
  },
]

export default routes
