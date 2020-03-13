var express = require('express');
var router = express.Router();
let Bisection = require('../models/Bisec');
let Falseposition = require('../models/False');
let Onepoints = require('../models/Onepoint');
let Newtons = require('../models/Newton');
let Secants = require('../models/Secant');
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
module.exports = router;
