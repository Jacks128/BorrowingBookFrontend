import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  renewalQuantity:String="";
  returned:boolean= false;
  bookid:String="";
  userid:String="";

  

  constructor(private router: Router, private api: ClientesService) { }

  ngOnInit(): void {
    
  }

  Reserva(){
    console.log(this.renewalQuantity,this.returned,this.bookid,this.userid);
    this.api.registrar(this.renewalQuantity,this.returned,this.bookid,this.userid).subscribe(res =>
      console.log("Book borrowed correctly")
    )
  }
}
