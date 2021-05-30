import React from 'react';

const Tables = React.lazy(() => import('./views/base/tables/Tables'));
const AdminForms = React.lazy(() => import('./views/base/forms/AdminForm'));
const TeacherForm = React.lazy(() => import('./views/base/forms1/TeacherForm'));
const StudentForm = React.lazy(() => import('./views/base/forms3/StudentForm'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
 { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/base/forms', name: 'Admin', component: AdminForms },
  { path: '/base/forms1', name: 'Teacher', component: TeacherForm},
  { path: '/base/forms3', name: 'Teacher', component: StudentForm},
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/charts', name: 'Charts', component: Charts },
];

export default routes;
