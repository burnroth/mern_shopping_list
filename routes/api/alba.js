const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const axios = require("axios")

router.post("/", (req, res) => {
  axios.post('https://fn.segmentapis.com/?b=TjdxQzQ2dDVYSTo6ZjNBOEJsVjdKV2JMb2hXUXdveFROQVBQcWVmamxJVlU=', {
    ...req.body
  })
  .then(function (response) {
    console.log(response);
  })
  .then(() => res.json({ success: true }))
  .catch(function (error) {
    console.log(error);
  });


});

module.exports = router;

