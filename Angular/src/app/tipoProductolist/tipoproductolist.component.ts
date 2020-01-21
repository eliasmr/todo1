import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import {  Subject } from "rxjs";
import { TipoProductoService } from 'src/app/Service/tipo-producto.service';

@Component({
  selector: 'app-tipoproductoslist',
  templateUrl: './tipoproductolist.component.html',
  styleUrls: ['./tipoproductolist.component.css']
})
export class TipoProductolistComponent implements OnInit {
  tipoproductos: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();

  constructor(private tipoproductoservice:TipoProductoService) { } 

  ngOnInit() {  
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.tipoproductoservice.getTipoProductoList().subscribe(data => {
      this.tipoproductos = data;
      this.dtTrigger.next();
    });
  }

  // reloadData() {
  //   this.partners=this.partnerservice.getPartnerList();
  // }

  

}
