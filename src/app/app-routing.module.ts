import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {PrincipalComponent } from '../app/components/principal/principal.component';
import {TareasComponent} from '../app/components/tareas/tareas.component';
import {EditarComponent} from '../app/components/editar/editar.component';

const routes: Routes = [
  {path:"",component:PrincipalComponent},
  {path:"tareas",component:TareasComponent},
  {path:"editar",component:EditarComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
