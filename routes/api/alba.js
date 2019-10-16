const express = require("express");
const router = express.Router();
//const fetch = require("node-fetch");
const axios = require("axios");
const { createApolloFetch } = require("apollo-fetch");

const fetch = createApolloFetch({
  uri: 'https://gcqupcrlpd.execute-api.eu-west-1.amazonaws.com/v1/production/search',
});

router.post("/", (req, res) => {
  axios
    .post(
      "https://fn.segmentapis.com/?b=TjdxQzQ2dDVYSTo6ZjNBOEJsVjdKV2JMb2hXUXdveFROQVBQcWVmamxJVlU=",
      {
        ...req.body
      }
    )
    .then((res) => {
     const data = JSON.parse(res.config.data)
     
      console.log(data);

     fetch({
       query: `query orgsearch($query: String!) {
       organizations(query: $query) {
         id
         name
         city
         email
         phonenumber
         temperature
         customerRelation
       }
     }`,
       variables: { query: data.name }
     }).then(res => {
       const { organizations } = res.data
       organizations.map(org => {
         //console.log(org)
       })
     });
    })
    .then(() => res.json({ success: true }))
    .catch((error) => {
      console.log(error);
      res.json({ success: false})
    });
});

module.exports = router;