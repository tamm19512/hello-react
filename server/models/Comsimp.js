let mongoose = require('mongoose');

//Schema Validation

let userSchema8 = mongoose.Schema({
    fx : {type: String ,required : true },
    a : {type: Number ,required : true},
    b : {type: Number ,required : true},
    n : {type: Number ,required : true}
});

let Comsimp = mongoose.model('comsimps',userSchema8);
module.exports = Comsimp;
