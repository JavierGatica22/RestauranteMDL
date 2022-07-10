import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicio2/producto.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  lista:any=[];
  buscadorString = "";
  constructor(private ProductoService: ProductoService) { }

  ngOnInit(): void {
    this.listarProducto();
  }

  listarProducto()
  {
    this.ProductoService.getProducto().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      }
    );
  }

  EliminarProducto(id:string)
  {
    this.ProductoService.deleteProducto(id).subscribe(
      res=>{
        this.ngOnInit();
      }
    )
  }


}
