const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.post("/", (req, res) => {
  const segment =
    "https://fn.segmentapis.com/?b=TjdxQzQ2dDVYSTo6ZjNBOEJsVjdKV2JMb2hXUXdveFROQVBQcWVmamxJVlU=";
  fetch(segment, {
    method: "POST",
    body: req.body
  })
    .then(() => res.json({ success: true }), res.setHeader('Content-Type', 'text/plain'))
    .then(console.log(req.body))
    .catch(err => res.json({ success: false }, console.log(err)));
});

module.exports = router;

