let mongoose = require('mongoose');

//Schema Validation

let userSchema7 = mongoose.Schema({
    fx : {type: String ,required : true },
    a : {type: Number ,required : true},
    b : {type: Number ,required : true}
});

let Simpson = mongoose.model('simpsoms',userSchema7);
module.exports = Simpson;
