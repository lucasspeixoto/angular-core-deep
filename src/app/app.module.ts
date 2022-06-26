import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, //! Inclui as principais diretivas que usamos como ngFor e ngIf
    BrowserAnimationsModule,
    HttpClientModule,
    CoursesModule,
  ],
  bootstrap: [AppComponent], //! bootstrap é a propriedade utilizada para identificar o componente root do app
})
export class AppModule {}
