const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require("../models/video");

const db = "mongodb://usermustafa:mustafa123@ds135724.mlab.com:35724/videoplayer";
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
   if(err) {
       console.log("Err!", err);
   }
})

router.get('/videos', function(req, res) {
   console.log("Get request for all videos");
   Video.find({})
   .exec(function (err, videos) {
      if(err) {
          console.log("error retrieving videos", err)
      }else {
          res.json(videos);
      }
   });
});
router.get('/videos/:id', function(req, res) {
  
   Video.findById(req.params.id)
   .exec(function (err, video) {
      if(err) {
          console.log("error retrieving video", err)
      }else {
          res.json(video);
      }
   });
});

router.post('video', function (req, res) {
    newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;

    newVideo.save(function (err, insertedVideo) {
        if(err) {
            console.log("Error saving Video");
        }else {
            res.json(insertedVideo);
        }
    })
})

module.exports = router;