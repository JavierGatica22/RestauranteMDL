import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url='/api/';
  constructor(private http: HttpClient) { }

//Get Producto
getProducto(){
  return this.http.get(this.url+'/menu')
}

//Agregar Producto
addProducto(producto:Producto){
  return this.http.post(this.url+'/agregarproducto', producto)
}

//Eliminar Producto
deleteProducto(id:string){
  return this.http.delete(this.url+'/'+id);

}
}

export interface Producto{
  idProducto?:string;
  Nom_prod?:string;
  Precio?:string;
  Stock?:string;
  Imagen?:string;
  Restaurante_idRestaurante?:string;
  Categoria?:string;

}