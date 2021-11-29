import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    users:any=[];
    clienteid:String="";
  constructor(private router: Router, private api:ClientesService) { }

  ngOnInit(): void {

  }

  getUsuarios(){
    this.api.getUsuarios().subscribe(res=>{
      this.users=res;
      console.log(this.users);
    })
  }
  

  


}
