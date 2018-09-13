var express=require("express");
var router=express.Router();
var pool=require("../pool");

router.post("/signin",(req,res)=>{
  var {uname,upwd}=req.body;
  var sql="select * from dnf_user where uname=? and upwd=?";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err){
      throw err;
    }else{
      if(result.length>0){
        req.session.uid=result[0].uid;
        res.send({ok:1})
      }else{
        res.send({ok:0,msg:"您输入的账号或者密码不正确"})
      }
    }
  })
});
router.get("/islogin",(req,res)=>{
  if(req.session.uid==null)
    res.send({ok:0});
  else{
    var sql="select * from dnf_user where uid=?";    
    pool.query(sql,[req.session.uid],(err,result)=>{
      res.send({ok:1,uname:result[0].uname,user_name:result[0].user_name});
    })
  }
});
router.get("/signout",(req,res)=>{
  delete req.session.uid;
  res.send();
});

module.exports=router;