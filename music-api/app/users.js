const express = require("express");
const User = require("../models/User");
const Track = require("../models/Track");
const bcrypt = require("bcrypt");

const router = express.Router();
const auth = require('../authMiddleware');

router.get("/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (e) {
    res.status(404).send({ message: "Not Found" });
  }
});
router.post("/", async (req, res) => {
  const user = new User(req.body);

  try {
    user.generateToken();
    await user.save();
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/sessions", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).send({ error: "Username or password is incorrect" });
  }

  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) {
    return res.status(400).send({ error: "Username or password is incorrect" });
  }

  user.generateToken();
  await user.save();

  res.send(user);
});

router.put("/:id", auth, async (req, res) => {
  try {
    
    const user = await User.findById(req.params.id);
    const track = await Track.findById(req.body.track).populate("album");
    let index = user.tracks.findIndex(el => el.id.toString() === req.body.track);
      if (index !== -1) {
      user.tracks.splice(index, 1)
      } else {
      user.tracks.push({id: track._id, name: track.name, album: track.album, duration: track.duration, sn: track.sn})
      }
    user.save()
    res.send(user);
  } catch (e) {
    res.status(404).send({ message: "Not Found" });
  }
});

module.exports = router;
