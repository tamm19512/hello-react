let mongoose = require('mongoose');

//Schema Validation

let userSchema13 = mongoose.Schema({
    n : {type: Number ,required : true },
    x1 : {type: Number ,required : true},
    xx : {type: Array ,required : true},
    xy : {type: Array ,required : true}
});

let Linear_Regress = mongoose.model('linearregress',userSchema13);
module.exports = Linear_Regress;
