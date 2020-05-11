import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const PaymentHistory = React.lazy(() => import('./views/PaymentHistory'));
const TotalPayment = React.lazy(() => import('./views/TotalPayment'));
const ChangePassword = React.lazy(() => import('./views/ChangePassword'));
const Login = React.lazy(() => import('./views/Pages/Login'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/paymenthistory', exact: true, name: 'PaymentHistory', component: PaymentHistory },
  { path: '/totalpayment', exact: true, name: 'PaymentHistory', component: TotalPayment },
  { path: '/changepassword', exact: true, name: 'ChangePassword', component: ChangePassword },
  { path: '/logout', name: 'Login', component: Login },
];

export default routes;
