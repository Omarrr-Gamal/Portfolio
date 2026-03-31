import { createBrowserRouter } from 'react-router';
import { MainLayout } from './pages/MainLayout';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AdminLogin } from './admin/AdminLogin';
import { AdminLayout } from './admin/AdminLayout';
import { AdminDashboard } from './admin/AdminDashboard';
import { AdminProjects } from './admin/AdminProjects';
import { AdminHero } from './admin/AdminHero';
import { AdminSkills } from './admin/AdminSkills';
import { AdminTheme } from './admin/AdminTheme';
import { AdminAbout } from './admin/AdminAbout';
import { AdminContact } from './admin/AdminContact';

const basename = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL;

export const router = createBrowserRouter(
  [
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'projects', Component: ProjectsPage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
    ],
  },
  {
    path: '/admin/login',
    Component: AdminLogin,
  },
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      { path: 'dashboard', Component: AdminDashboard },
      { path: 'projects', Component: AdminProjects },
      { path: 'hero', Component: AdminHero },
      { path: 'skills', Component: AdminSkills },
      { path: 'theme', Component: AdminTheme },
      { path: 'about', Component: AdminAbout },
      { path: 'contact', Component: AdminContact },
    ],
  },
  ],
  { basename }
);
