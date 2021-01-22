import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListViewComponent } from './list-view/list-view.component';

const routes: Routes = [
  { path: 'structure/:id', component: DetailsComponent },
  { path: 'structure', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }