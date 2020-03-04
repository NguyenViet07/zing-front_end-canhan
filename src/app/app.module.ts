import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ListSongComponent } from './component/list-song/list-song.component';
import { CreateSongComponent } from './component/create-song/create-song.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditSongComponent } from './component/edit-song/edit-song.component';
import { DetaiSongComponent } from './component/detai-song/detai-song.component';

@NgModule({
  declarations: [
    AppComponent,
    ListSongComponent,
    CreateSongComponent,
    EditSongComponent,
    DetaiSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
