let mongoose = require('mongoose');

//Schema Validation

let userSchema9 = mongoose.Schema({
    x : {type: Number ,required : true },
    x0 : {type: Number ,required : true},
    fx0 : {type: Number ,required : true},
    x1 : {type: Number ,required : true},
    fx1 : {type: Number ,required : true}
});

let Linear_inter_N = mongoose.model('linearinnews',userSchema9);
module.exports = Linear_inter_N;
