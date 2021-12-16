import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [FormsModule, RouterModule.forChild(routes), SharedModule],
})
export class ShoppingListModule {}
