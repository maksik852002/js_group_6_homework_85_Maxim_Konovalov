const express = require("express");
const TrackHistory = require("../models/TrackHistory");
const Album = require("../models/Album");
const auth= require("../authMiddleware");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const album = await  Album.find().populate('artist');
    const history = await TrackHistory.find({user: req.user._id}).sort({datetime: -1}).limit(20).populate('track');
    // console.log(history)
    for(alb of album) {
      for(hist of history) {
        console.log(hist)
        if (hist.track.album.toString() === alb._id.toString()) {
          hist.artist = {_id: alb.artist._id, name: alb.artist.name }
        }
      }
     }
    console.log(history)
    res.send(history);
  } catch (e) {
    console.log(e)
    res.status(422).send(e);
  }	
});

router.post("/", auth, async (req, res) => {
  try {
    req.body.user = req.user._id
    const history = new TrackHistory(req.body);
    await history.save();
    return res.send(history);
  } catch (e) {
    return res.status(400).send(e);
  }
});

module.exports = router;
