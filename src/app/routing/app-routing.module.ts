import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePanelComponent } from '../home-panel/home-panel.component';
import { LoginPanelComponent } from '../login-panel/login-panel.component';
import { RegisterPanelComponent } from '../register-panel/register-panel.component';
import { TrainConnectionComponent } from '../train-connection/train-connection.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomePanelComponent},
  {path: 'login', component:LoginPanelComponent},
  {path: 'user', component:HomePanelComponent},
  {path: 'register', component:RegisterPanelComponent},
  {path: 'connection', component:TrainConnectionComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }