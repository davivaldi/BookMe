import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { IndexComponent } from './index/index.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

const routes: Routes = [
  {path: 'books',component: IndexComponent },
  {path: 'book/new',component: AddBookComponent },
  {path: '', pathMatch: 'full', redirectTo: '/books' },
  {path: 'book/edit/:_id',component: EditBookComponent },
  {path: 'book/delete/:_id',component: DeleteBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
