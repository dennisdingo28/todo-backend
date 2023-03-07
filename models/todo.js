const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo:{
        type:String,
        required:[true,"you must provide a name"],
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})


module.exports=mongoose.model('todo',TodoSchema)