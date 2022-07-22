import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import UserPage from './UserPage';
import SignUp from '~/components/user/SignUp';
import EditUserInfo from '~/components/user/EditUserInfo';
import Admin from './Admin';
import AdminAllSales from '~/components/admin/AdminAllSales';
import AdminAllSaledList from '~/components/admin/AdminAllSaledList';
import AdminEditPD from '~/components/admin/AdminEditPD';
import AdminAddPD from '~/components/admin/AdminAddPD';
import Performance from './Performance';
import PerformanceContainer from '~/components/performance/PerformanceContainer';
import showContainer from '~/components/performance/showContainer';
import UserPaidInfo from '~/components/user/UserPaidInfo';
import Payment from './Payment';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'main',
      path: '/',
      component: Home,
    },
    {
      name: 'admin',
      path: '/admin',
      component: Admin,
      children: [
        { path: 'allsales', component: AdminAllSales },
        { path: 'edit/:adminId', component: AdminEditPD },
        { path: 'add', component: AdminAddPD },
        { path: 'saled', component: AdminAllSaledList },
      ],
    },
    {
      name: 'user',
      path: '/user',
      component: UserPage,
      children: [
        { path: 'signup', component: SignUp },
        { path: 'mypage/:user', component: EditUserInfo },
        { path: 'paidlist', component: UserPaidInfo },
      ],
    },
    {
      name: 'performance',
      path: '/performance',
      component: Performance,
      children: [
        {
          path: 'search',
          component: PerformanceContainer,
        },
        { path: 'detail/:detailId', component: showContainer },
      ],
    },
    {
      name: 'payment',
      path: '/payment',
      component: Payment,
    },
  ],
});
