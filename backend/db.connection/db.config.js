const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose
    .connect("mongodb+srv://vishalvino99:vishal1234@cluster0.xb7cqsl.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DataBase!");
    })
    .catch((err) => {
      console.log(err);
      console.log("Not conected to the database");
    });
};

module.exports = connectToMongo;