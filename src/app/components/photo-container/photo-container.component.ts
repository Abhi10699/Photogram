import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.scss']
})
export class PhotoContainerComponent implements OnInit {

  @Input("image-id") imageId: number;

  constructor() { }

  ngOnInit(): void {
  }

}
