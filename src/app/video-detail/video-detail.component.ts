import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video'],
  outputs: ['updateVideoEvent', 'deleteVideoEvent']
})
export class VideoDetailComponent {
  video:Video;
 private editTitle:boolean = false;
 private updateVideoEvent = new EventEmitter();
 private deleteVideoEvent = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    this.editTitle = false;
  }
  //this.editTitle = !this.editTitle;
  onTitleClicked() {
    this.editTitle = true;
  }

   updateVideo() {
     this.updateVideoEvent.emit(this.video );
   }
   deleteVideo() {
 this.deleteVideoEvent.emit(this.video);
   }

}
