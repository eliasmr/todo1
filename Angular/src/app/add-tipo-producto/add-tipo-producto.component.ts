import { Component, OnInit } from '@angular/core';
import { TipoProductoService } from 'src/app/Service/tipo-producto.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { TipoProducto } from '../tipoproducto';
@Component({
  selector: 'app-add-tipo-producto',
  templateUrl: './add-tipo-producto.component.html',
  styleUrls: ['./add-tipo-producto.component.css']
})
export class AddTipoProductoComponent implements OnInit {

  constructor(private tipoproductoService:TipoProductoService) { }

  tipoProducto : TipoProducto=new TipoProducto();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  tipoproductosaveform=new FormGroup({
    descripcion:new FormControl('' , [Validators.required , Validators.minLength(5) ] )    
  });

  saveTipoProducto(saveTipoProducto){
    this.tipoProducto=new TipoProducto();   
    this.tipoProducto.nombre=this.TipoProductoDescripcion.value;
    this.submitted = true;
    this.save();
  }

  

  save() {
    this.tipoproductoService.createTipoProducto(this.tipoProducto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.tipoProducto = new TipoProducto();
  }

  get TipoProductoDescripcion(){
    return this.tipoproductosaveform.get('descripcion');
  }

  
  addTipoProductoForm(){
    this.submitted=false;
    this.tipoproductosaveform.reset();
  }
}
