import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Restaurante, RestaurantesService } from '../services/restaurantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comenzar',
  templateUrl: './comenzar.component.html',
  styleUrls: ['./comenzar.component.scss']
})
export class ComenzarComponent implements OnInit {
  RestauranteNuevo:Restaurante={idRestaurante:'',Correo:'', Telefono:'', Direccion:'', Nombre_Negocio:'', Nombre_client:'', Apellido_client:'', Contrasena:'', Tipo_empresa:'' };
  constructor(private restaurantesService:RestaurantesService, private router:Router) { }

  ngOnInit(): void {
    
  }
  AgregarRestaurante(){
    this.restaurantesService.addRestaurante(this.RestauranteNuevo).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['registrocorrecto'])
      }
    );
  }


}
