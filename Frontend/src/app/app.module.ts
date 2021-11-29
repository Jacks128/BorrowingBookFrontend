import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { TicketComponent } from './ticket/ticket.component';
import { BorrowedBookComponent } from './borrowed-book/borrowed-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationComponent,
    UserComponent,
    BookComponent,
    TicketComponent,
    BorrowedBookComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
