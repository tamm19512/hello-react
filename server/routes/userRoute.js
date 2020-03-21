var express = require('express');
var router = express.Router();
let Bisection = require('../models/Bisec');
let Falseposition = require('../models/False');
let Onepoints = require('../models/Onepoint');
let Newtons = require('../models/Newton');
let Secants = require('../models/Secant');

let Trap = require('../models/Trap');
let Comtrap = require('../models/Comtrap');
let Simpson = require('../models/Simpson');
let Comsimp = require('../models/Comsimp');

let Linear_inter_N = require('../models/Linear_inter_N');
let Quadratic_inter_N = require('../models/Quadratic_inter_N');
let Linear_inter_L = require('../models/Linear_inter_L');
let Quadratic_inter_L = require('../models/Quadratic_inter_L');




/* GET users listing. */
router.get('/showbisection', function(req, res, next) {
 
  Bisection.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/addbisection',(req,res)=>{
  console.log(req.body);
  let doc = new Bisection(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.get('/showfalse', function(req, res, next) {
 
  Falseposition.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/addfalse',(req,res)=>{
  console.log(req.body);
  let doc = new Falseposition(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.get('/showonepoint', function(req, res, next) {
 
  Onepoints.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/addonepoint',(req,res)=>{
  console.log(req.body);
  let doc = new Onepoints(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.get('/shownewton', function(req, res, next) {
 
  Newtons.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/addnewton',(req,res)=>{
  console.log(req.body);
  let doc = new Newtons(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.get('/showsecant', function(req, res, next) {
 
  Secants.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/addsecant',(req,res)=>{
  console.log(req.body);
  let doc = new Secants(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.get('/showtrap', function(req, res, next) {
 
  Trap.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/addtrap',(req,res)=>{
  console.log(req.body);
  let doc = new Trap(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.get('/showcomtrap', function(req, res, next) {
 
  Comtrap.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/addcomtrap',(req,res)=>{
  console.log(req.body);
  let doc = new Comtrap(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.get('/showsimpson', function(req, res, next) {
 
  Simpson.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/addsimpson',(req,res)=>{
  console.log(req.body);
  let doc = new Simpson(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.get('/showcomsimp', function(req, res, next) {
 
  Comsimp.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/addcomsimp',(req,res)=>{
  console.log(req.body);
  let doc = new Comsimp(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.get('/showlinearinnew', function(req, res, next) {
 
  Linear_inter_N.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/addlinearinnew',(req,res)=>{
  console.log(req.body);
  let doc = new Linear_inter_N(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.get('/showlinearinla', function(req, res, next) {
 
  Linear_inter_L.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/addlinearinla',(req,res)=>{
  console.log(req.body);
  let doc = new Linear_inter_L(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.get('/showquainnew', function(req, res, next) {
 
  Quadratic_inter_N.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/addquainnew',(req,res)=>{
  console.log(req.body);
  let doc = new Quadratic_inter_N(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.get('/showquainla', function(req, res, next) {
 
  Quadratic_inter_L.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/addquainla',(req,res)=>{
  console.log(req.body);
  let doc = new Quadratic_inter_L(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
module.exports = router;
