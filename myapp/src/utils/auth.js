export const saveStorage = (name, value) => window.localStorage.setItem(name, value)
export const getStorage = (name) => window.localStorage.getItem(name)
export const removeStorage = (name) => window.localStorage.removeItem(name)

export const getAuthToken = () => getStorage('user_token')
export const removeAuthToken = () => removeStorage('user_token')
export const isAuthenticated = () => !!getAuthToken()
export const redirectToLogin = () => window.location.assign('/login')