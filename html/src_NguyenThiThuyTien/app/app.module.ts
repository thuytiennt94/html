import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BooksService } from './Services/books.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MycomponentsComponent } from './mycomponents/mycomponents.component';

const routes : Routes = [
  {path: "", component: MycomponentsComponent},
  {path: "myflie1", component: MycomponentsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MycomponentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
