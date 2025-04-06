import { Routes } from '@angular/router';
import { CatProfileComponent } from './component/templates/cat-profile/cat-profile.component';
import { UserProfileComponent } from './component/templates/user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: 'app-cat-profile',
    component: CatProfileComponent,
  },
  {
    path: 'app-user-profile',
    component: UserProfileComponent,
  },
];
