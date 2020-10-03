const db = require("../models");
const { v4: uuidv4 } = require("uuid");

exports.index = (req, res) => {
  const title = "Player Routes";
  const subTitle = "Welcome to player route";

  res.render("index", { title, subTitle });
};

exports.get = async (req, res) => {
  try {
    const playerFindAll = await db.Player.findAll();
    res.send(playerFindAll);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getbyid = async (req, res) => {
  try {
    const playerFind = await db.Player.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(playerFind);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.post = async (req, res) => {
  try {
    const playerNew = await db.Player.create({
      id: uuidv4(),
      username: req.body.username,
      password: req.body.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send(playerNew);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.put = async (req, res) => {
  try {
    const playerEdit = await db.Player.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!playerEdit) {
      res.status(404).json({ message: "Not found!" });
    }

    playerEdit.username = req.body.username || playerEdit.username;
    playerEdit.password = req.body.password || playerEdit.password;

    await playerEdit.save();

    res.send(playerEdit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const playerDelete = await db.Player.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!playerDelete) {
      res.status(404).json({ message: "Not found!" });
    }

    playerDelete.destroy();
    res.json({ msg: "Successfully deleted!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
