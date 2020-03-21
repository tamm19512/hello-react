let mongoose = require('mongoose');

//Schema Validation

let userSchema10 = mongoose.Schema({
    x : {type: Number ,required : true },
    x0 : {type: Number ,required : true},
    fx0 : {type: Number ,required : true},
    x1 : {type: Number ,required : true},
    fx1 : {type: Number ,required : true}
});

let Linear_inter_L = mongoose.model('linearinlas',userSchema10);
module.exports = Linear_inter_L;
