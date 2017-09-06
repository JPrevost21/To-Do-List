import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  items:any[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        prompt: 'write code',
        isComplete: false
      },
      {
        prompt: 'listen to music',
        isComplete: false
      }
    ];
  }

  onClick(){
    this.items.push({
      prompt: 'New Items',
      isComplete: false
    });
  }

  addItem(item){
    console.log(item);
    this.items.unshift({
      prompt: item.value,
      isComplete: false
    });
    item.value = '';
    return false;
  }

  lineThroughItem(item) {
    item.isComplete = !item.isComplete;
  }

  deleteItem(item){
    for(let i = 0; i <this.items.length; i++){
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
    }
  }

}