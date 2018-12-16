import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video']
})
export class VideoDetailComponent implements OnInit {
 private editTitle:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.editTitle = false;
  }
  //this.editTitle = !this.editTitle;
  onTitleClicked() {
    this.editTitle = true;
  }

}
