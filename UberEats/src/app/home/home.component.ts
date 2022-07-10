import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../services/restaurantes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lista:any=[];
  constructor(private RestaurantesService: RestaurantesService) { }

  ngOnInit(): void {
    this.listarRestaurante();
  }

  listarRestaurante()
  {
    this.RestaurantesService.getRestaurantes().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      }
    );
  }

}
