import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-borrowed-book',
  templateUrl: './borrowed-book.component.html',
  styleUrls: ['./borrowed-book.component.css']
})
export class BorrowedBookComponent implements OnInit {
bbooks:any=[];
  constructor(private router: Router, private api:ClientesService) { }

  ngOnInit(): void {
  }

  getBorrowedBooks(){
    this.api.getBorrowedBooks().subscribe(res=>{
      this.bbooks=res;
      console.log(this.bbooks);
    })
  }
  
}
