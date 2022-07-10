import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  url='/api';
  constructor(private http: HttpClient) { }

  //Get Restaurantes
getRestaurantes(){
  return this.http.get(this.url)
}

//Get Un restaurante
getUnRestaurante(id:string){
  return this.http.get(this.url+'/'+id);
}

//Agregar Restaurante
addRestaurante(restaurante:Restaurante){
  return this.http.post(this.url, restaurante)
}

//Login
iniciarSesion(Correo:string){
  return this.http.post(this.url+'/login',{Correo:Correo})
}

//Eliminar
deleteRestaurante(id:string){
  return this.http.delete(this.url+'/'+id);

}

//Modificar
editarRestaurnte(id:string, restaurante:Restaurante){
  return this.http.put(this.url+'/'+id, restaurante);
}

}

export interface Restaurante{
  idRestaurante?:string;
  Correo?:string;
  Telefono?:string;
  Direccion?:string;
  Nombre_Negocio?:string;
  Nombre_client?:string;
  Apellido_client?:string;
  Contrasena?:string;
  Tipo_empresa?:string;
}