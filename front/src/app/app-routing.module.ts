import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importamos el componente de la página
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

// Declaramos la ruta con su componente correspondiente
const routes: Routes = [
  {
    path: 'nosotros',
    component: NosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
