const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://test:test123@cluster0.rgojuyj.mongodb.net/?retryWrites=true&w=majority",{
    useNewURLParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Sucessful");
}).catch((error)=>{
    console.log(error);
})


