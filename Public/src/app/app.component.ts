import { Component,OnInit } from '@angular/core';
import { HttpService } from "./http.service";
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "app";
  books = [];
  book: Book;
  newBook: Book;

  constructor(private _httpService: HttpService) {}
  ngOnInit() {

  }


  deleteBook(book: Book): void {
    console.log(`Click event delete is working`);
    this._httpService.deleteOne(book).subscribe(bookdata => console.log(bookdata));
  }

  editBook(book: Book): void {
    console.log(`Click editevent is working`);
    this.book = book;
  }

  onSubmit() {
    let observable = this._httpService.createBook(this.newBook);
    observable.subscribe(data => {
      console.log("Got data from the form", data);
    
    });
  }















}