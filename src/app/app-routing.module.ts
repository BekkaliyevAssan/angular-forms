import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatorGeneralComponent } from './pages/creator-general/creator-general.component';
import { CreatorComponent } from './pages/creator/creator.component';
import { HomeComponent } from './pages/home/home.component';
import { SeeResultComponent } from './pages/see-result/see-result.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'creator', component: CreatorComponent, children: [
    { path: '', redirectTo: 'create-form', pathMatch: 'full' },
    { path: 'create-form', component: CreatorGeneralComponent },
    { path: 'see-results', component: SeeResultComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
