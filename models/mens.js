const mongoose= require("mongoose") ;

const menSchema = new mongoose.Schema({
    ranking : {
        type : Number
    },
    name : {
        type : String
    }
}) 

const  MensRanking = new mongoose.model("MensRanking" , menSchema) ;

module.exports = MensRanking ;