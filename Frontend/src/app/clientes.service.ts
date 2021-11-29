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
    const datos={
      renewalQuantity:renewalQuantity,
      returned:returned,
      bookid:bookid,
      userid:userid
    }
    return this.httpclient.post(this.path + "/borrowedbook/create",
      {
        body: JSON.stringify(datos), // <-- Aquí van los datos
        headers: {
          "Content-Type": "application/json", // <-- Importante el encabezado
        },
        method: "POST",
      });
  }

  ticket(idbbook:any): Observable<any> {
    return this.httpclient.post(this.path + "/ticket/create/"+idbbook,
      {
        idbbook: idbbook
      });
  }

  renewal(idrenewal:any): Observable<any> {
    return this.httpclient.put(this.path + "/borrowedbook/renewal/"+idrenewal,
      {
        idrenewal: idrenewal
      });
  }

  returnB(idreturn:any): Observable<any> {
    return this.httpclient.put(this.path + "/borrowedbook/returnborrowedBook/"+idreturn,
      {
        idreturn: idreturn
      });
  }
  
}
