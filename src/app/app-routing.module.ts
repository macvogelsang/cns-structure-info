import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailModalComponent} from './detail-modal.component'

const routes: Routes = [
  { path: 'structure/:id', component: DetailModalComponent },
  { path: 'structure', component: DetailModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }