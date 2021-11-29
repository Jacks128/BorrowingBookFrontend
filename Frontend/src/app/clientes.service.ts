import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  public path: String;

  constructor(public httpclient: HttpClient) { 
    this.path = "http://localhost:8080/v1";
  }

  getUsuarios():Observable<any>{
    return this.httpclient.get<any>(this.path+"/user/getUsers",
    {
    
    });
  }
  
  getLibros():Observable<any>{
    return this.httpclient.get<any>(this.path+"/book/getBooks",
    {
    
    });
  }
  
  getTickets():Observable<any>{
    return this.httpclient.get<any>(this.path+"/ticket/getTickets",
    {
    
    });
  }
  getBorrowedBooks():Observable<any>{
    return this.httpclient.get<any>(this.path+"/borrowedbook/getBorrowedBooks",
    {
    
    });
  }
  registrar(renewalQuantity:any,returned:boolean,bookid:any,userid:any): Observable<any> {
    return this.httpclient.post(this.path + "/borrowedbook/create",
      {
        renewalQuantity: renewalQuantity,
        returned: returned,
        bookid: bookid,
        userid: userid
      });
  }

  ticket(idbbook:any): Observable<any> {
    return this.httpclient.post(this.path + "/ticket/create/"+idbbook,
      {
        idbbook: idbbook
      });
  }
  
}
