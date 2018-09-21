var express=require("express");
var router=express.Router();
var pool=require("../pool");

router.post("/activitySearch",(req,res)=>{
   var nPage = req.body.nPage;
    if(nPage==0){
        var sql = `select * from dnf_activity order by nid desc limit 0,4`;
        pool.query(sql,(err,result)=>{
            if(err){
                throw err;
            }else{
                res.send({code:100,result:result})
            }
        })
    }else{
        var sql = `select * from dnf_activity where nPage = ? order by nid desc limit 0,4`;
        pool.query(sql,[nPage],(err,result)=>{
            if(err){
                throw err;
            }else{
                res.send({code:100,result:result})
            }
        })
    }
});



module.exports=router;