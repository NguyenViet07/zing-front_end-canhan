import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetaiSongComponent} from './component/detai-song/detai-song.component';
import {EditSongComponent} from './component/edit-song/edit-song.component';


const routes: Routes = [
  {
    path: 'detail-song/:id',
    component: DetaiSongComponent
  },
  {
    path: 'edit-song/:id',
    component: EditSongComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
