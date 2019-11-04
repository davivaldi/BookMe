import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  books: any;
  book: Book;
  
constructor(private _httpService: HttpService) { }


  ngOnInit() {
    this.getBooks();

  }

  getBooks() {
    let observable = this._httpService.getBooks();
    observable.subscribe(data => {
      console.log("got our Books", data);
      this.books = data;
    });
  }

  deleteOne(id){
    console.log("in the delete function",id)
    let observable = this._httpService.deleteOne(id);
    observable.subscribe(data => {
      this.getBooks();
    })
  }

}