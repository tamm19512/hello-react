let mongoose = require('mongoose');

//Schema Validation

let userSchema14 = mongoose.Schema({
    fx : {type: String ,required : true },
    d : {type: Number ,required : true},
    h : {type: Number ,required : true},
    x : {type: Number ,required : true}
});

let Numerdiff = mongoose.model('numerdiffs',userSchema14);
module.exports = Numerdiff;
