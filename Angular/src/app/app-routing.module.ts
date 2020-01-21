import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { TipoProductolistComponent } from './tipoProductolist/tipoproductolist.component';
import { AddTipoProductoComponent } from './add-tipo-producto/add-tipo-producto.component';
import {UpdatetipoProductoComponent } from './updatetipo-producto/updatetipo-producto.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-client', pathMatch: 'full' },
  { path: '', redirectTo: 'view-producto', pathMatch: 'full' },
  { path: 'view-producto', component: ProductoListComponent},
  { path: 'add-producto', component: AddProductoComponent },
  { path: '', redirectTo: 'view-tipo-producto', pathMatch: 'full' },
  { path: 'view-tipo-producto', component: TipoProductolistComponent},
  { path: 'add-tipo-producto', component: AddTipoProductoComponent }, 
  { path: 'update-tipo-producto/:id', component: UpdatetipoProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
