const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const items = require('./routes/api/items');
const alba = require('./routes/api/alba');



const app = express();

app.use(bodyParser.json());

// Mongoose
const db = require('./config/keys').mongoURI
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err))
// End Mongoose

app.use("/api/items", items)
app.use("/api/alba", alba)

if( process.env.NODE_ENV === "production" ) {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  }
  )
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`))