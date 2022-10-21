import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodosComponent } from './add-todos/add-todos.component';
import { HomeComponent } from './home/home.component';
import { ListofdataComponent } from './listofdata/listofdata.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SearchComponent } from './search/search.component';
import { RouterGuardService } from './service/router-guard.service';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'listoftodo',component:ListofdataComponent,canActivate:[RouterGuardService]},
  {path:'add',component:AddTodosComponent,canActivate:[RouterGuardService]},
 {path:'update/:id',component:UpdateComponent,canActivate:[RouterGuardService]},
 {path:'search/:id',component:SearchComponent,canActivate:[RouterGuardService]},
 {path:'register',component:RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  

})
export class AppRoutingModule { }
