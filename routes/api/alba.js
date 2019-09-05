const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.post("/api/alba", (req, res) => {
  const endpoint =
    "https://prod-113.westeurope.logic.azure.com:443/workflows/a35ed98a961b4c47844a2dd94a2986a2/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ywmBb_SCkBOC68XzwqxcdL7PmGr4Eeq2Kj9b5b9oxCU";
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: {
      yolo: "swag"
    }
  })
    .then(() => res.json({ success: true }))
    .then(console.log(req.body))
    .then(console.log(req.body.body))
    .catch(err => res.json({ success: false }, console.log(err)));
});

module.exports = router;
