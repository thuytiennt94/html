import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  listDS = [
    {"id": 1, "name" : "C Programming", "content": "Cơ bản", "category": 1 , "status": true},
    {"id": 2, "name" : "Javascript Nâng Cao", "content": "Nâng cao", "category": 2 , "status": false},
  ];

is_editing = false;

constructor() { }

public getMH(): object[] {
  return this.listDS;
}
public getIsEditing(): boolean {
  return this.is_editing;
}
///thêm vào mh
public addMH(id: number, name : string, content : string, category : number, status : boolean) {
  this.listDS.push({ "id": id, "name" : name, "content": content, "category" :category, "status":status});
}
//xoá dòng id
public XoaSp(id : number) {
  //this.listMH.splice(id, 1);
  this.listDS.forEach((element, index, array) => {
    if(element.id === id) {
      this.listDS.splice(index, 1);
    }
  });
}

public updateMH(id : number, newname : string, newcontent : string, newcategory:number, newstatus:boolean) {
  this.listDS.forEach((element, index, array) => {
    if(element.id === id) {///nếU sửa id thì
      element.name = newname;
      element.content = newcontent;
      element.category = newcategory;
      element.status = newstatus;
    }
  });
  }
}
