import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './pages/main-page/main-page.module#MainPageModule',
  },
  {
    path: 'not-found',
    pathMatch: 'full',
    loadChildren:
      './pages/not-found-page/not-found-page.module#NotFoundPageModule',
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
