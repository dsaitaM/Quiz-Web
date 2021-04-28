import { Component, OnInit } from '@angular/core';
import { asapScheduler } from 'rxjs';
import {FormGroup,FormBuilder,Validators,AbstractControl} from '@angular/forms'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})


export class PrincipalComponent implements OnInit {
  /*listaTareas:Array<string>=[];
  listaIniciadas:Array<string>=[];
  listaProceso:Array<string>=[];
  listaTerminadas:Array<string>=[];
  titulo:AbstractControl;
  form: FormGroup;*/
  constructor() {
    //this.form=this.fb.group({
      //titulo:['',Validators.required]

    }ngOnInit(): void {
  }
      //this.titulo=this.form.controls['titulo'];

}

/*function crearTareas(){
  
  this.listaTareas.push((String)titulo.value);
  console.log(this.listaTareas[0]);
}*/



export interface tarea{
  titulo:string;
  estado:string;
}

/*let form=document.getElementsByTagName("form")
let titulo:any=document.getElementById("titulo");
let estado:any=document.getElementById("estado");
let mensajeTitulo:any=document.getElementById("mensajeTitulo");
let mensajeSelect=document.getElementById("mensajeSelect");

form.addEventListener("submit",function(evento){
  if (comprobarTitulo(titulo)){
    evento.preventDefault();
    
  }else{
    mensajeTitulo.innerHTML="Rellene este campo";
    mensajeTitulo.style.display="block";
    evento.preventDefault();
  }
});
*/

let titulo:any=document.getElementById("titulo");

function comprobarTitulo(titulo: { value: string; }){
  console.log(titulo,titulo.value);
  if (titulo.value==''){ 
      return false;
  }else{
    return true;
  }
}

