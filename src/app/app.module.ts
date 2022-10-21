import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListofdataComponent } from './listofdata/listofdata.component';
import { UpdateComponent } from './update/update.component';
import { AddTodosComponent } from './add-todos/add-todos.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListofdataComponent,
    UpdateComponent,
    AddTodosComponent,
    HomeComponent,
    SearchComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
