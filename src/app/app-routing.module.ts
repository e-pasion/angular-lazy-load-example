import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AgregarComponent } from './productos/pages/agregar/agregar.component';
// import { ListadoComponent } from './productos/pages/listado/listado.component';
// import { EditarComponent } from './productos/pages/editar/editar.component';
// import { ProductosComponent } from './productos/pages/productos/productos.component';
// import { ForgotPasswordComponent } from './auth/pages/forgot-password/forgot-password.component';
// import { LoginComponent } from './auth/pages/login/login.component';
// import { RegisterComponent } from './auth/pages/register/register.component';

const routes: Routes = [

  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )  
  },
  { 
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosModule )  
  },
  {
    path: '**', redirectTo:'auth' 
  }

      // {path:'productos/agregar', component: AgregarComponent},
      // {path:'productos/editar', component: EditarComponent},
      // {path:'productos/listado', component: ListadoComponent},
      // {path:'productos/producto', component: ProductosComponent},
      // {path: 'auth/forgot', component: ForgotPasswordComponent},
      // {path: 'auth/login', component: LoginComponent},
      // {path: 'auth/register', component: RegisterComponent},

];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
