import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
books:any=[];
  constructor(private router: Router, private api:ClientesService) { }

  ngOnInit(): void {
  }

  getLibros(){
    this.api.getLibros().subscribe(res=>{
      this.books=res;
      console.log(this.books);
    })
  }
}
