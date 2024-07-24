const mongoose = require("mongoose", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}) ;


mongoose.connect("mongodb://localhost:27017/olympics")
.then(() => {
    console.log("database connection successful") ;
})
.catch((err) =>{
console.log("NO  connection") ;
})