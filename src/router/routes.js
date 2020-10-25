import LoginView from '../views/LoginView'
import Welcome from '../modules/Personal/components/Welcome'
import UserInfoView from '../views/UserInfoView'

export const routes = [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome
      },
    {
      path: '/user-info',
      name: 'UserInfo',
      component: UserInfoView
    }
  ]