const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminSchema = new Schema({
  email: {
    type: "String",
    default: "N/A",
  },
  password:{
    type: "String",
    default: "N/A",
  },
  name: {
    type: "String",
    default: "N/A",
  },
},{timestamps: true});
module.exports = mongoose.model("admin", AdminSchema);
