
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListpageComponent } from './listpage/listpage.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseselectorComponent } from './courseselector/courseselector.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {NgxMaskModule, IConfig} from "ngx-mask";
import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {entriesReducer} from './state/reducers/entries.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {trackReducer} from "./state/reducers/tracks.reducer";
// import {collectionReducer} from "./state/reducers/collection.reducer";


export const options: Partial<null|IConfig> | (()=> Partial<IConfig>) = null;


@NgModule({
  declarations: [
    AppComponent,
    ListpageComponent,
    HeaderComponent,
    CourseselectorComponent,

  ],
  exports: [
    CommonModule
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatRippleModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    StoreModule.forRoot({entries: entriesReducer, tracks: trackReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 50 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
