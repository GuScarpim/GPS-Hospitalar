import Routes from './AllRoutes'

const getRoutes = (hasAccessToNewStructure) => {
  const oldRoutes = [
    ...Routes
  ]

  const newRoutes = [
    ...Routes
  ]

  return hasAccessToNewStructure ? newRoutes : oldRoutes
}

export default getRoutes
