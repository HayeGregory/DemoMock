import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';
import { FormulaireTestComponent } from './pages/formulaire-test/formulaire-test.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'add', component: EditComponent },
  { path: 'update/:id', component: EditComponent },

  { path: 'formulaire', component: FormulaireTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
