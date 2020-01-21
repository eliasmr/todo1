import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/Service/producto.service';
import { Producto } from '../producto';
import { Observable,Subject } from "rxjs";

import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

 constructor(private productoservice:ProductoService) { }

  productosArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  productos: Observable<Producto[]>;
  producto : Producto=new Producto();
  deleteMessage=false;
  productolist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.productoservice.getProductoList().subscribe(data =>{
    this.productos =data;
    this.dtTrigger.next();
    })
  }
  
  deleteProducto(id: number) {
    this.productoservice.deleteProducto(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.productoservice.getProductoList().subscribe(data =>{
            this.productos =data
            })
        },
        error => console.log(error));
  }


  updateProducto(id: number){
    this.productoservice.getProducto(id)
      .subscribe(
        data => {
          this.productolist=data           
        },
        error => console.log(error));
  }

  productoupdateform=new FormGroup({
    id:new FormControl(),
    descripcion:new FormControl()
  });

  updateProd(updateProducto){
    this.producto=new Producto(); 
   this.producto.id=this.ProductoId.value;
   this.producto.descripcion=this.ProductoDescripcion.value; 

   

   this.productoservice.updateProducto(this.producto.id,this.producto).subscribe(
    data => {     
      this.isupdated=true;
      this.productoservice.getProductoList().subscribe(data =>{
        this.productos =data
        })
    },
    error => console.log(error));
  }

  get ProductoDescripcion(){
    return this.productoupdateform.get('descripcion');
  }

  

  get ProductoId(){
    return this.productoupdateform.get('id');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
