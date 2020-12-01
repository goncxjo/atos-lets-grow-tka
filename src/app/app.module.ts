import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LayoutModule } from "./layout/layout.module";
import { SharedModule } from './shared/shared.module';
import { ExamsModule } from './exams/exams.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { CanditatesListComponent } from './candidates/canditates-list/canditates-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CanditatesListComponent,
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    LayoutModule,
    ExamsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    { provide: 'BASE_API_URL', useValue: environment.apiUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

