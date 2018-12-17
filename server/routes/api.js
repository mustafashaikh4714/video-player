const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require("../models/video");

// const db = "mongodb://usermustafa:mustafa123@ds135724.mlab.com:35724/videoplayer";
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, function (err) {
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

router.post('/video', function (req, res) {
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;

    newVideo.save(function (err, insertedVideo) {
        if(err) {
            console.log("Error saving Video");
        }else {
            res.json(insertedVideo);
        }
    });
});

router.put('/video/:id', function (req, res) {
    console.log("update a video");
    Video.findOneAndUpdate(req.params.id, {
        $set: {title: req.body.title, url: req.body.url, description: req.body.description}
    },
  {
      new: true
  }, function (err, updatedVideo) {
     if(err) {
         console.log("error updating video")
     } else {
         res.json(updatedVideo);
     }
  });
});

router.delete('/video/:id', function (req, res) {
    console.log("deleting a video");
    Video.findByIdAndRemove(req.params.id, function (err, deletedVideo) {
        if(err) {
            console.log("error deleting video")
        }else {
            res.json(deletedVideo);
        }
    });
});

module.exports = router;