const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    name:String,
    company:String,
    email:{
        type:String,
        required:true,
    },
    phone:String,
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
    }
});
module.exports=cardSchema;
const dbConnection=require('../db/dbClient.js');
const Card = dbConnection.model('Card', cardSchema);
module.exports = Card;