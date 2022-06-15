import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  name: string = 'Vũ- mai';
  age: number = 3
  birthday: Date = new Date;
  //khai báo listfood
  listfoods = ['Toán','Văn', 'Anh', 'Lí', 'Hoá' ]

  constructor() { }

  ngOnInit(): void {
  }

}
