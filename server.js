const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require('./routes/api/items');



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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`))






// const userSchema = require("./userSchema.js");
// const User = mongoose.model("user", userSchema, "user");
// console.log(db)
// async function createUser(username) {
//   return new User({
//     username,
//     created: Date.now()
//   }).save();
// }

// async function findUser(username) {
//   return await User.findOne({ username });
// }

// (async () => {
//   const connector = mongoose.connect(db, { useNewUrlParser: true });
//   const username = "Bob"

//   let user = await connector.then(async () => {
//     return findUser(username);
//   }).catch(err => console.log(err))

//   if (!user) {
//     user = await createUser(username);
//   }

//   console.log(user);
//   process.exit(0);
// })();