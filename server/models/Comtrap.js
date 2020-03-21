let mongoose = require('mongoose');

//Schema Validation

let userSchema6 = mongoose.Schema({
    fx : {type: String ,required : true },
    a : {type: Number ,required : true},
    b : {type: Number ,required : true},
    n : {type: Number ,required : true}
});

let Comtrap = mongoose.model('comtraps',userSchema6);
module.exports = Comtrap;
