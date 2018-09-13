var express=require("express");
var router=express.Router();
var pool=require("../pool");

//这是角色名称检查
router.post("/usercheck",(req,res)=>{
    var uname = req.body.uname;
    var sql=`select user_name from dnf_user where uname=?`;
    pool.query(sql,[uname],(err,result)=>{
        if(err){
            throw err;
        }else{
            if(result.length!=0){
                res.send({code:100,msg:result})
            }else{
                res.send({code:400,msg:"您在该大区没有角色"});
            }
        }
    })
});

//这是队伍名称检查
router.post("/tnamecheck",(req,res)=>{
    var tname = req.body.sTeamName;
    var sql = `select * from dnf_dplteam where tname = ?`;
    pool.query(sql,[tname],(err,result)=>{
        if(err){
            throw err;
        }else if(result.length>0){
            res.send({code:400,msg:"队伍名称已被使用"});
        }else{
            res.send({code:100,msg:"队伍名称可用"})
        }
    });
});

//这是队伍注册
router.post("/teamRegister",(req,res)=>{
    var uname = req.body.uname;
    var tname = req.body.tname;
    var iArea = req.body.iArea;
    var iPos = req.body.iPos;
    var tInfo = req.body.tInfo;
    var user_name = req.body.user_name;
    var mainC  = req.body.mainC;
    var secondC  = req.body.secondC;
    var helpC  = req.body.helpC;
    var naiC  = req.body.naiC;
    var sql2 = `insert into dnf_dplteam values (null,?,?,?,null,?,?,?,?)`;
    pool.query(sql2,[tname,tInfo,iArea,mainC,secondC,helpC,naiC],(err,result)=>{
        if(err) {
            throw err;
        }
    });
    var sql3 = `update dnf_user set iPos=?,tname=? where uname = ?`;
    pool.query(sql3,[iPos,tname,uname],(err,result)=>{
        if(err){
            throw err;
        }
    });
    var sql = `update dnf_user inner join dnf_dplteam on dnf_user.tname = dnf_dplteam.tname set dnf_user.teamid = dnf_dplteam.tid`;
    pool.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
            // res.send({code:100,msg:"更换队伍id成功"})
            res.send({code:100,msg:"成功啦"});
        }
    });
});

//router.post("/teams",(req,res)=>{
//    var sql = `(SELECT * FROM dnf_dplteam LEFT OUTER JOIN dnf_user ON dnf_user.tname = dnf_dplteam.tname )
//                UNION
//               (SELECT * FROM dnf_dplteam RIGHT OUTER JOIN dnf_user ON dnf_user.tname = dnf_dplteam.tname)  ;`;
//    pool.query(sql,(err,result)=>{
//        if(err){
//            throw err;
//        }else{
//            res.send({code:100,teams:result});
//        }
//    })
//});

router.post("/teams",(req,res)=> {
    var pno = 0;
    var pageSize = 6;
    var sql = `select * from dnf_dplteam where iArea = ? limit ?,? `;
    pool.query(sql,["华北",pno,pageSize],(err, result)=> {
        if (err) {
            throw err;
        } else {
            res.send({code: 100, teams: result});
        }
    })
});
router.post("/users",(req,res)=>{
    var sql = `select * from dnf_user order by teamid`;
    pool.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send({code:100,users:result});
        }
    })

});
// (SELECT * FROM dnf_user LEFT OUTER JOIN dnf_dplteam ON dnf_user.teamid = dnf_dplteam.tid)
//UNION
//(SELECT * FROM dnf_user RIGHT OUTER JOIN dnf_dplteam ON dnf_user.teamid = dnf_dplteam.tid);


// 判断是否已有队伍
router.post("/hasTeam",(req,res)=>{
    var uname = req.body.uname;
    var sql = `select teamid from dnf_user where uname = ?`;
    pool.query(sql,[uname],(err,result)=>{
        if(err){
            throw err;
        }else{
            if(result[0].teamid==null){
                res.send({code:400,msg:"没有队伍"})
            }else{
                res.send({code:100,msg:result});
            }
        }
    });
});

//查找vip队伍
router.post("/isVip",(req,res)=>{
    var pno = 0;
    var pageSize = 6;
    var sql = ` select * from dnf_dplteam where isVip = 1 and iArea = ? limit ?,?`;
    var R1;
    pool.query(sql,["华北",pno,pageSize],(err,result)=>{
        if (err) {
            throw err;
        } else {
            R1 = result;
        }
    });
    var sql2 = `select * from dnf_user`;
    pool.query(sql2,(err,result)=>{
        if (err) {
            throw err;
        } else {
            res.send({code:100,teams:R1,users:result});
        }
    });
});



router.post("/searchBtn",(req,res)=>{
    var a = "";
    var pno = 0;
    var pageSize = 6;
    var iArea = req.body.iArea;
    var iPos = req.body.iPos;
    var isVip = req.body.isVip;
    if(isVip==undefined){
        if(iPos==0){
            var sql = ` select * from dnf_dplteam where iArea = ? limit ?,?`;
            var R1;
            pool.query(sql,[iArea,pno,pageSize],(err,result)=>{
                if (err) {
                    throw err;
                } else {
                    R1 = result;
                }
            });
        }else if(iPos==1){
            var sql = ` select * from dnf_dplteam where iArea = ? and mainC = ?  limit ?,?`;
            var R1;
            pool.query(sql,[iArea,a,pno,pageSize],(err,result)=>{
                if (err) {
                    throw err;
                } else {
                    R1 = result;
                }
            });
        }else if(iPos==2){
            var sql = ` select * from dnf_dplteam where iArea = ? and secondC = ?  limit ?,?`;
            var R1;
            pool.query(sql,[iArea,a,pno,pageSize],(err,result)=>{
                if (err) {
                    throw err;
                } else {
                    R1 = result;
                }
            });
        }else if(iPos==3){
            var sql = ` select * from dnf_dplteam where iArea = ? and helpC = ?  limit ?,?`;
            var R1;
            pool.query(sql,[iArea,a,pno,pageSize],(err,result)=>{
                if (err) {
                    throw err;
                } else {
                    R1 = result;
                }
            });
        }else if(iPos==4){
            var sql = ` select * from dnf_dplteam where iArea = ? and naiC = ?  limit ?,?`;
            var R1;
            pool.query(sql,[iArea,a,pno,pageSize],(err,result)=>{
                if (err) {
                    throw err;
                } else {
                    R1 = result;
                }
            });
        }
    }else{
        if(iPos==0){
            var sql = ` select * from dnf_dplteam where isVip = ? and iArea = ? limit ?,?`;
            var R1;
            pool.query(sql,[isVip,iArea,pno,pageSize],(err,result)=>{
                if (err) {
                    throw err;
                } else {
                    R1 = result;
                }
            });
        }else if(iPos==1){
            var sql = ` select * from dnf_dplteam where isVip = ? and iArea = ? and mainC = ?  limit ?,?`;
            var R1;
            pool.query(sql,[isVip,iArea,a,pno,pageSize],(err,result)=>{
                if (err) {
                    throw err;
                } else {
                    R1 = result;
                }
            });
        }else if(iPos==2){
            var sql = ` select * from dnf_dplteam where isVip = ? and iArea = ? and secondC = ?  limit ?,?`;
            var R1;
            pool.query(sql,[isVip,iArea,a,pno,pageSize],(err,result)=>{
                if (err) {
                    throw err;
                } else {
                    R1 = result;
                }
            });
        }else if(iPos==3){
            var sql = ` select * from dnf_dplteam where isVip = ? and iArea = ? and helpC = ?  limit ?,?`;
            var R1;
            pool.query(sql,[isVip,iArea,a,pno,pageSize],(err,result)=>{
                if (err) {
                    throw err;
                } else {
                    R1 = result;
                }
            });
        }else if(iPos==4){
            var sql = ` select * from dnf_dplteam where isVip = ? and iArea = ? and naiC = ?  limit ?,?`;
            var R1;
            pool.query(sql,[isVip,iArea,a,pno,pageSize],(err,result)=>{
                if (err) {
                    throw err;
                } else {
                    R1 = result;
                }
            });
        }
    }
    var sql2 = `select * from dnf_user`;
    pool.query(sql2,(err,result)=>{
        if (err) {
            throw err;
        } else {
            res.send({code:100,teams:R1,users:result});
        }
    });
});



module.exports=router;