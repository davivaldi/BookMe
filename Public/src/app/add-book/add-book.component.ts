import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from '../book';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})


export class AddBookComponent implements OnInit {
  newBook: Book;
 
  error = "";
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit() {
    this.newBook = {title:" ", isbn: null, author: " ",desc: " "};
  }


  createBook(){
    let observable = this._httpService.createBook(this.newBook);
    observable.subscribe((data: Book) => { 
        this.newBook = {title: "", isbn: null, author: " ", desc: ""}
        this._router.navigate(['/books']);
      
    }, (error: HttpErrorResponse) => {


    })
  }

}
