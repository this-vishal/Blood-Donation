const mongoose = require("mongoose");
const { Schema } = mongoose;

const BloodReqSchema = new Schema({
  firstName:{
    type: "String",
    default: "N/A",
  },
lastName:{
  type: "String",
  default: "N/A",
},
gender:{
    type: "String",
    default: "N/A",
  },
email:{
    type: "String",
    default: "N/A",
  },
address:{
    type: "String",
    default: "N/A",
  },
mobile:{
    type: "String",
    default: "N/A",
  },
aadhar:{
    type: "String",
    default: "N/A",
  },
group:{
    type: "String",
    default: "N/A",
  },
},{timestamps: true});
module.exports = mongoose.model("bloodreq", BloodReqSchema);
