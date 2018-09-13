var express=require("express");
var router=express.Router();
var pool=require("../pool");

router.post("/uname",(req,res)=>{
    var uname=req.body.uname;
    if(!uname){
        res.send({code: 401,msg: '用户名不能为空或格式不正确'});
        return;//终止
    }
    var sql=`select * from dnf_user where uname=?`;
    pool.query(sql,[uname],(err,result)=>{
        if(err){
            throw err;
        }else{
           if(result.length!=0){
                res.send({code:400,msg:"用户名已存在"})
           }else{
               res.send({code:101,msg:"此用户名可用"})
           }
        }
    })
});


router.post("/user_register",(req,res)=>{
    var uname = req.body.uname;
    if(uname==""){
        res.send({code:400});
        return;
    }
    var upwd = req.body.upwd;
    if(upwd==""){
        res.send({code:401});
        return;
    }
    var phone = req.body.phone;
    if(phone==""){
        res.send({code:402});
        return;
    }
    var email = req.body.email;
    var sql = `insert into dnf_user(uname,upwd,email,phone) values (?,?,?,?)`;
    pool.query(sql,[uname,upwd,email,phone],(err,result)=>{
        if(err){
            throw err;
        }else{
           res.send({code:100,msg:"账号注册成功"})
        }
    })
});




module.exports=router;