import { Component, OnInit } from '@angular/core';
import { Video } from '../video';


@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos:Video[] = [
    {"_id": "1", "title": "title1", "url": "ur1", "description": "desc1"},
    {"_id": "2", "title": "title2", "url": "ur2", "description": "desc1"},
    {"_id": "3", "title": "title3", "url": "ur3", "description": "desc1"}
  ];

   selectedVideo:Video;
  constructor() { }

  ngOnInit() {
  }

  onSelectVideo(vid:any) {
   this.selectedVideo = vid;
   console.log(this.selectedVideo);
  }

}
