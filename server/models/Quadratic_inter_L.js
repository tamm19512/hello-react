let mongoose = require('mongoose');

//Schema Validation

let userSchema12 = mongoose.Schema({
    x : {type: Number ,required : true },
    x0 : {type: Number ,required : true},
    fx0 : {type: Number ,required : true},
    x1 : {type: Number ,required : true},
    fx1 : {type: Number ,required : true},
    x2 : {type: Number ,required : true},
    fx2 : {type: Number ,required : true}
});

let Quadratic_inter_L = mongoose.model('quainlas',userSchema12);
module.exports = Quadratic_inter_L;
