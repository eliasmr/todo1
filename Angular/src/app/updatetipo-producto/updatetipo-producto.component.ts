import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import  {TipoProducto } from '../tipoproducto'
import { TipoProductoService } from 'src/app/Service/tipo-producto.service';
import { Observable,Subject } from "rxjs";
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-updatetipo-producto',
  templateUrl: './updatetipo-producto.component.html',
  styleUrls: ['./updatetipo-producto.component.css']
})
export class UpdatetipoProductoComponent implements OnInit {

  
  constructor(private rutaActiva: ActivatedRoute,private tipoproductoService:TipoProductoService) {
   }
   public tipoProducto : TipoProducto = new TipoProducto();
   
  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.tipoproductoService.getTipoProducto(params.id).subscribe(update =>{ 
          let data = Object.values(update);
          this.tipoProducto.id = data[0]['id'];
          this.tipoProducto.nombre = data[0]['nombre'];
          console.log(this.tipoProducto)
        }) ;
    
      }
    );
  }

  Actualizar(id,nombre){
    this.tipoProducto = new TipoProducto();
    this.tipoProducto.nombre = nombre
    this.tipoProducto.id = id
    console.log("ee "+nombre)
    this.tipoproductoService.updateTipoProducto(this.tipoProducto)
    .subscribe(data => console.log(data), error => console.log(error));

  }
  Eliminar(){

  }
}
