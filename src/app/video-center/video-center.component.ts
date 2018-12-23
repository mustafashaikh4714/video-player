import { Component, OnInit } from "@angular/core"
import { Video } from "../video"
import { VideoService } from "../video.service"

@Component({
  selector: "app-video-center",
  templateUrl: "./video-center.component.html",
  styleUrls: ["./video-center.component.css"]
})
export class VideoCenterComponent implements OnInit {
  videos: Video[]
  private hiddenNewVideo: boolean = true
  selectedVideo: Video

  constructor(private _videoService: VideoService) {}

  ngOnInit() {
    this._videoService
      .getVideos()
      .subscribe(resVideoData => (this.videos = resVideoData))
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video
    this.hiddenNewVideo = true
  }

  onSubmitAddVideo(video: Video) {
    this._videoService.addVideo(video).subscribe(resNewVideo => {
      this.videos.push(resNewVideo)
      this.selectedVideo = resNewVideo
    })
    this.hiddenNewVideo = true
  }

  newVideo() {
    this.hiddenNewVideo = false
  }

  onUpdateVideo(video: any) {
    this._videoService
      .updateVideo(video)
      .subscribe(resUpdatedVideo => (video = resUpdatedVideo))
    this.selectedVideo = null
  }

  onDeleteVideo(video: any) {
    let videoArray = this.videos
    this._videoService.deleteVideo(video).subscribe(resDeletedVideo => {
      
      // for (let i = 0; i < videoArray.length; i++) {
      //   if (videoArray[i]._id === video.id) {
      //     videoArray.splice(i, 1)
      //   }
      // }

      videoArray = videoArray.filter(eachVideo => eachVideo._id != video.id)
    })
    this.selectedVideo = null
  }
}
