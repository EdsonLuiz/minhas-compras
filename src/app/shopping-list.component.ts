import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [
  ]
})
export class ShoppingListComponent implements OnInit {

  list: string[] = [
    'Leite',
    'Açucar'
  ]

  newItem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem() {
    if(this.newItem.trim()) {
      this.list.push(this.newItem)
    }
    this.newItem = ''
  }

}
