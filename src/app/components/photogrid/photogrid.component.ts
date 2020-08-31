import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photogrid',
  templateUrl: './photogrid.component.html',
  styleUrls: ['./photogrid.component.scss']
})
export class PhotogridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createList(x: number): number[] {
    let arr: number[] = [];
    for (let i = 0; i < x; i++) {
      arr.push(i);
    }
    return arr;
  }
}
