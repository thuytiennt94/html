import { Component, OnInit } from '@angular/core';
import { BooksService } from '../Services/books.service';

@Component({
  selector: 'app-mycomponents',
  templateUrl: './mycomponents.component.html',
  styleUrls: ['./mycomponents.component.css']
})

export class MycomponentsComponent implements OnInit {
  name:string = '';
  id:number = 0;
  content:string ='';
  //public listsp=["Toán","Văn","ANh",  ];
  category : number = 0;
  public listbooks=["hoas","helo"];
  checkUpdate : number = 0;
  status : boolean = false;
  listDS = new Array();
  is_editing = false;
  next_id : number=0;
  constructor(private mServices : BooksService) {
      this.listDS = mServices.getMH();
      this.is_editing = mServices.getIsEditing();
      this.next_id = (this.listDS[this.listDS.length-1].id+1) ;
      console.log(this.next_id);
   }

  ngOnInit(): void {
  }
  public addMon() {
    if(this.checkUpdate == 1) {
      this.updateMHDone();
      this.checkUpdate = 0;
    } else {
      this.mServices.addMH(this.next_id, this.name, this.content, this.category, this.status);
      this.next_id = this.next_id + 1;
      alert("Add successfull.");
    }

    this.id = 0;
    this.name = '';
    this.content = '';
    this.category = 0;
    this.status = false;
  }
//xoá id
  public XoaSP(id : number) {
    var traloi = window.confirm("Bạn chắc chắn muốn xoá?");
    if(traloi == true){
      this.mServices.XoaSp(id);
      alert('Đã xoá.');
    }
  }
//cập nhật
  public updateMH(id : number, name : string, content : string, category:number, status:boolean) {
    this.is_editing = true;
    console.log(this.is_editing);
    this.checkUpdate = 1;
    this.id = id;
    this.name = name;
    this.content = content;
    this.category = category;
    this.status = status;
  }

  public updateMHDone() {
    this.mServices.updateMH(this.id, this.name, this.content, this.category, this.status);
    this.is_editing = false;
    alert("Cập nhật thành công.");
  }
}

