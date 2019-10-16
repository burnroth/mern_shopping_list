const express = require("express");
const router = express.Router();

// Item model

const Item = require("../../models/Item");

// @route         GET api/items
// @deescription  Get all items
// @access        Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route         POST api/items
// @deescription  Create an item
// @access        Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    price: req.body.price
  });

  newItem.save().then(item => res.json(item));
});

// @route         DELETE api/items/:id
// @deescription  Delete an item
// @access        Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route         PUT api/items/:id
// @deescription  Edit an item
// @access        Public

// TODO
// Use instead: https://mongoosejs.com/docs/models.html#updating

router.put("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item =>
      item.update({ 
        name: req.body.body.name, 
        price: req.body.body.price })
    )
    .then(item => res.json(item))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
