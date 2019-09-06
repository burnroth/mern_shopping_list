const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.post("/", (req, res) => {
  const segment =
    "https://fn.segmentapis.com/?b=TjdxQzQ2dDVYSTo6ZjNBOEJsVjdKV2JMb2hXUXdveFROQVBQcWVmamxJVlU=";
  fetch(segment, {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: req.body
  })
    .then(() => res.json({ success: true }))
    .then(console.log(req.body))
    .catch(err => res.json({ success: false }, console.log(err)));
});

module.exports = router;

