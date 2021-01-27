const router = require("express").Router();
let Item = require("../models/Item.model");

router.route("/").get((req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const category = req.body.category;
  const type = req.body.type;
  const image = req.body.image;
  const description = req.body.description;
  const price = Number(req.body.price);
  const newItem = new Item({
    username,
    title,
    category,
    type,
    image,
    description,
    price,
  });
  newItem
    .save()
    .then(() => res.json("item added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Item.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json("Item deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Item.findById(req.params.id)
    .then((item) => {
      item.username = req.body.username;
      item.description = req.body.description;
      item.duration = Number(req.body.duration);
      item.date = Date.parse(req.body.date);

      item
        .save()
        .then(() => res.json("Item updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
