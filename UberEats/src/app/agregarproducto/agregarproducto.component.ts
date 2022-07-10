import { Component, OnInit } from '@angular/core';
import { Producto, ProductoService } from '../servicio2/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.component.html',
  styleUrls: ['./agregarproducto.component.scss']
})
export class AgregarproductoComponent implements OnInit {

  ProductoNuevo:Producto={idProducto:'', Nom_prod:'', Precio:'', Stock:'', Imagen:'', Restaurante_idRestaurante:'', Categoria:'' };
  constructor(private productoService:ProductoService, private router:Router) { }

  ngOnInit(): void {
  }
  AgregarProducto(){
    this.productoService.addProducto(this.ProductoNuevo).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['menu'])
      }
    );
  }
}
