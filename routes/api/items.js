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
    name: req.body.name
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
router.put("/:id", (req, res) => {
  console.log(req.body.body + req.params.id)
Item.findById(req.params.id)
.then(item => item.update({name:req.body.body}))
});

module.exports = router;
