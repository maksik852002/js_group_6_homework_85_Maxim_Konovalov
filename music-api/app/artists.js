const path = require("path");
const express = require("express");
const multer = require("multer");
const nanoid = require("nanoid");

const config = require("../config");
const Artist = require("../models/Artist");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const artists = await Artist.find().sort({name: 1}).limit(20);
    res.send(artists);
  } catch (e) {
    res.status(422).send(e);
  }	
});

router.get("/:id", async (req, res) => {
	try {
	  const artist = await Artist.findById(req.params.id);
	  res.send(artist);
	} catch (e) {
	  res.status(422).send(e);
	}	
});

router.post("/", upload.single("image"), async (req, res) => {
  const artists = new Artist(req.body);
  if (req.file) {
    artists.image = req.file.filename;
  }
  try {
    await artists.save();
    res.send({ id: artists._id });
  } catch (e) {
    res.status(422).send(e);
  }
});

module.exports = router;
