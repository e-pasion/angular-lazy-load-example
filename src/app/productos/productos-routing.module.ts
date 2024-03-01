import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path:'agregar', component: AgregarComponent},
      {path:'editar', component: EditarComponent},
      {path:'listado', component: ListadoComponent},
      {path:'producto', component: ProductosComponent},
      {path:'**', redirectTo: 'listado'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
