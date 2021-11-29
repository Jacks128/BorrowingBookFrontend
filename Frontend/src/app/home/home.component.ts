import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../clientes.service';
import 'animate.css';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  idbbook:any="";

  constructor(private router: Router, private api:ClientesService) { }

  ngOnInit(): void {
  }


  InsertarTicket(){
    console.log(this.idbbook);
      this.api.ticket(this.idbbook).subscribe(res =>
        console.log("Ticket ready")
  
      )    
}
}
