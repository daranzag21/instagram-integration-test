import { HomeView } from '../views/HomeView';

interface AppRoute {
  name: string;
  path: string;
  Component: React.ComponentType;
}

export const routes: AppRoute[] = [
  {
    name: 'home',
    path: '/',
    Component: HomeView,
  },
];
