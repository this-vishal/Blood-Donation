const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
var cors = require("cors");
const connectTomongoose = require("./db.connection/db.config");
connectTomongoose();
const app = express();
const BloodReqSchema = require("./models/BloodReq")
const BlooddonateSchema = require("./models/Blooddonate")
const AdminSchema = require("./models/Admin")


app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use("/", express.static("public/"));


const upload = multer({
  storage: multer.diskStorage({
      destination: (req, file, callback) => {
          callback(null, "./images")
      },
      filename: (req, file, callback) => {
          callback(null, file.originalname)
      }
  })
})



// =================================== admin api ====================================
// adimin login api
app.post("/admin-login", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "img", maxCount: 1 },
  ]), async (req, res) => {
    try {
      const user = await AdminSchema.findOne({"email": req.body.email});
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }else{
        if (user.password == req.body.password)  { 
          res.send({ message: "Admin Login successful" ,login:true})
        }else {
          res.send({ message: " password  not matched",login:false})
        }
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app.get("/admin-get", async (req, res) => {
    const users = await AdminSchema.find();
    res.send(users);
  });
  
  
  // admin create api 
app.post('/admin-create',upload.fields([
  { name: "image", maxCount: 1 },
]), async (req, res) => {
  console.log(req.body);
  try {
    const admin = new AdminSchema({...req.body})
  await admin.save();
  res.send({msg:"Successfully"})
  } catch (error) {
    console.log(error);
  }
});


// =================================== blood donate api =================================

// create 
app.post("/blood-donate-create", async (req, res) => {
try {
const data = new BlooddonateSchema({...req.body})
await data.save();
res.send({msg:"Successfully",data:data}).status(201)
} catch (error) {
  console.log(error);
res.send({msg:"Internal server error"}).status(500)

}
});

// get 
app.get("/blood-donate-get", async (req, res) => {
  const data = await BlooddonateSchema.find();
  if(data.length == 0){
    res.send({msg:"no data found",data:[]}).status(404)
  }else{

    res.send({msg:"Successfully",data:data}).status(200)
  }
});

// delete
app.delete("/blood-donate-delete/:id", async (req, res) => {
  try {
    const Courses = await BlooddonateSchema.findByIdAndDelete(req.params.id);
    if (!Courses) {
      return res.status(404).json({ message: "data not found" });
    }else{
      res.json({ message: "data deleted" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ================================== blood-request api ==================================

// create 
app.post("/blood-request-create", async (req, res) => {
  try {
  const data = new BloodReqSchema({...req.body})
  await data.save();
  res.send({msg:"Successfully",data:data}).status(201)
  } catch (error) {
    console.log(error);
  res.send({msg:"Internal server error"}).status(500)
  }
  });
  
  // get 
  app.get("/blood-request-get", async (req, res) => {
    const data = await BloodReqSchema.find();
    if(data.length == 0){
      res.send({msg:"no data found",data:[]}).status(404)
    }else{x
      res.send({msg:"Successfully",data:data}).status(200)
    }
  });
// delete
app.delete("/blood-request-delete/:id", async (req, res) => {
  try {
    const Courses = await BloodReqSchema.findByIdAndDelete(req.params.id);
    if (!Courses) {
      return res.status(404).json({ message: "data not found" });
    }else{
      res.json({ message: "data deleted" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});


const port =  9000;
app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});