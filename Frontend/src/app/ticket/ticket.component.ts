import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  tickets: any = [];
  constructor(private router: Router, private api:ClientesService) { }

  ngOnInit(): void {
  }

  getTickets(){
    this.api.getTickets().subscribe(res=>{
      this.tickets=res;
      console.log(this.tickets);
    })
  }
}
