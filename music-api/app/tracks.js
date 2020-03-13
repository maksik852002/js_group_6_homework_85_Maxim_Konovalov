const express = require("express");
const Track = require("../models/Track");

const router = express.Router();
 
router.get("/", async (req, res) => {
  try {
    let tracks;
    if (req.query.album) {
      tracks = await Track.find({ album: req.query.album }).sort({sn: 1}).limit(50);
    } else if (req.query.artist) {
      tracks = await Track.find().populate("album").limit(50);
      tracks = tracks.filter(
        el => el.album.artist._id.toString() === req.query.artist
      );
    } else {
      tracks = await Track.find().limit(50)
    }
    res.send(tracks);
  } catch (e) {
    res.status(422).send(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const track = await Track.findById(req.params.id).populate("album");
    res.send(track);
  } catch (e) {
    res.status(404).send({ message: "Not Found" });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body)
  const track = new Track(req.body);
  console.log(track)
  try {
    await track.save();
    res.send({ id: track._id });
  } catch (e) {
    res.status(422).send(e);
  }
});

module.exports = router;
