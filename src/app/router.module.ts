import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';

const appRoutes: Routes = [
  { path: 'create',
    component: CreateComponent
  },
  { path: 'index',
    component: IndexComponent
  }
];
export default appRoutes;
