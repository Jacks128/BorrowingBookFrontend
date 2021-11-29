import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BorrowedBookComponent } from './borrowed-book/borrowed-book.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TicketComponent } from './ticket/ticket.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "reservation",
    component: ReservationComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "book",
    component: BookComponent
  },
  {
    path: "ticket",
    component: TicketComponent
  },
  {
    path: "borrowed-book",
    component: BorrowedBookComponent
  },
  {
    path:"",
    redirectTo: "home",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
