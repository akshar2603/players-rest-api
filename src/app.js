const express = require("express") ;
require("../db/conn")
const mensRouter = require("../routers/menroute") ;

const app = express() ;
const port = process.env.PORT || 8000 ; 

app.use(express.json()) ;
app.use(mensRouter) ;
app.listen(port, () => {
   console.log(`connection successful established at ${port}`); 
})