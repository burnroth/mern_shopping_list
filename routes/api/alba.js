const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.post("/", (req, res) => {
  const segment =
    "https://fn.segmentapis.com/?b=TjdxQzQ2dDVYSTo6ZjNBOEJsVjdKV2JMb2hXUXdveFROQVBQcWVmamxJVlU=";
  fetch(segment, {
    method: "POST",
    body: req.body
  }).then("body sent successfully").catch(err => {console.log(err)})
});

module.exports = router;

