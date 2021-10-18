import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { EditComponent } from './pages/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from './components/form-error/form-error.component';

@NgModule({
  declarations: [AppComponent, IndexComponent, EditComponent, FormErrorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
