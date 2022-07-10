import { Component, OnInit } from '@angular/core';
import { Restaurante, RestaurantesService } from '../services/restaurantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Correo: string="";
  Contrasena: string="";
  constructor(private restauranteService:RestaurantesService, private router:Router) { }

  ngOnInit(): void {
  }

 async IniciarSesion(){
    var ress:any = await this.restauranteService.iniciarSesion(this.Correo).toPromise();
    if(this.Contrasena!==ress[0].Contrasena){return}
    this.router.navigate(['inicio'])
    window.alert("Ha iniciado sesion correctamente");
  }
}
