SET NAMES UTF8;
DROP DATABASE IF EXISTS dnf;
CREATE DATABASE dnf CHARSET=UTF8;
USE dnf;

#创建dnf dpl队伍表
#队伍编号 队伍名称 队伍简介
CREATE TABLE dnf_dplteam(
  tid INT PRIMARY KEY AUTO_INCREMENT,
  tname varchar(32),
  tInfo varchar(32),
  iArea varchar(32),
  isVip int default 0,
  mainC varchar(32) ,
  secondC varchar(32),
  helpC varchar(32) ,
  naiC varchar(32)

);
INSERT INTO dnf_dplteam VALUES(null,"","","","","","","","");
INSERT INTO dnf_dplteam VALUES(null,"心悦会员","我是会员我怕谁","华北",1,"追风少年","","","");
INSERT INTO dnf_dplteam VALUES(null,"三好学生","企鹅电竞三好学生等待大家进入","华北",0,"","omg","阿斯顿","");
INSERT INTO dnf_dplteam VALUES(null,"芳华","进击总决赛","华北",1,"阿里大佬","","","");
INSERT INTO dnf_dplteam VALUES(null,"rng","s8我吃定了","华西",1,"狂小狗","小米大佬","","");
INSERT INTO dnf_dplteam VALUES(null,"极冰盛宴","生与死,轮回不止。我们生,他们死!","华东",1,"刹那永恒","LL","","");
INSERT INTO dnf_dplteam VALUES(null,"燃魂军团","杀!!","华北",0,"","乔治","","");
INSERT INTO dnf_dplteam VALUES(null,"木叶忍者","火之意志,由我继承","华西",0,"","日向宁次","","");
INSERT INTO dnf_dplteam VALUES(null,"腾讯战队","不充钱,怎么变强","华南",1,"","马化腾","","");
INSERT INTO dnf_dplteam VALUES(null,"网易云音乐","在这里不知能听歌,还能听故事","华东",1,"网易云音乐","","","");
INSERT INTO dnf_dplteam VALUES(null,"网易云游戏","氪金也不一定能变强!","华东",0,"","网易云游戏","","");
INSERT INTO dnf_dplteam VALUES(null,"华为帝国","国产天下第一","华东",1,"华为任正非","","","");
INSERT INTO dnf_dplteam VALUES(null,"苹果","卖肾买我嘛","华西",1,"鬼才乔布斯","iPad","","");
INSERT INTO dnf_dplteam VALUES(null,"火腿肠战队","我永远不会凉凉","华北",0,"火腿肠","","","");
INSERT INTO dnf_dplteam VALUES(null,"MineCraft","我的世界,有什么我做不到!","华北",0,"我的世界","","积木","");
INSERT INTO dnf_dplteam VALUES(null,"流沙","这天下我要99分","华东",0,"韩非","","","紫女");
INSERT INTO dnf_dplteam VALUES(null,"字母炸弹","老子天下第一","华北",0,"","","字母A","");









#创建QQ账号表
#iPos是角色职责 如:主C 1 副C 2 辅助3 奶 4
#teamid是队伍表 表示成员所在队伍
CREATE TABLE dnf_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname varchar(32),
  upwd varchar(32),
  user_name varchar(32),
  email varchar(64),
  uimage varchar(255),
  iPos int,
  phone varchar(32),
  tname varchar(32),
  teamid int
);
INSERT INTO dnf_user VALUES(null,"dingding","12345678","追风少年","dingding@qq.com","../img/second-page/1.jpg",1,"12345678901","心悦会员",2);
INSERT INTO dnf_user VALUES(null,"doudou","87654321","omg","doudou@qq.com","../img/second-page/2.jpg",2 ,"12345678902","三好学生",3);
INSERT INTO dnf_user VALUES(null,"mayun","12345678","阿里大佬","mayun@qq.com","../img/second-page/3.jpg",1 ,"12345678903","芳华",4);
INSERT INTO dnf_user VALUES(null,"leijun","12345678","小米大佬","mayun@qq.com","../img/second-page/4.jpg",2 ,"12345678904","rng",5);
INSERT INTO dnf_user VALUES(null,"lidyu","12345678","阿斯顿","lidyu@qq.com","../img/second-page/5.jpg" ,3,"12345678905","三好学生",3);
INSERT INTO dnf_user VALUES(null,"Nelson","12345678","刹那永恒","Nelson@qq.com","../img/second-page/6.jpg",1,"12345678906","极冰盛宴",6);
INSERT INTO dnf_user VALUES(null,"Geroge","12345678","乔治","Geroge@qq.com","../img/second-page/7.jpg",2,"12345678907","燃魂军团",7);
INSERT INTO dnf_user VALUES(null,"tiantian","12345678","日向宁次","tiantian@qq.com","../img/second-page/8.jpg",2,"12345678908","木叶忍者",8);
INSERT INTO dnf_user VALUES(null,"mht","12345678","马化腾","mht@qq.com","../img/second-page/9.jpg",2,"12345678909","腾讯战队",9);
INSERT INTO dnf_user VALUES(null,"wyy1","12345678","网易云音乐","wyy1@qq.com","../img/second-page/10.jpg",1,"12345678910","网易云音乐",10);
INSERT INTO dnf_user VALUES(null,"wyy2","12345678","网易云游戏","wyy2@qq.com","../img/second-page/11.jpg",2,"12345678911","网易云游戏",11);
INSERT INTO dnf_user VALUES(null,"txl","12345678","LL","txl@qq.com","../img/second-page/12.jpg",2,"12345678912","极冰盛宴",6);
INSERT INTO dnf_user VALUES(null,"huawei","12345678","华为任正非","huawei@qq.com","../img/second-page/13.jpg",1,"12345678913","华为帝国",12);
INSERT INTO dnf_user VALUES(null,"apple","12345678","鬼才乔布斯","apple@qq.com","../img/second-page/14.jpg",1,"12345678914","苹果",13);
INSERT INTO dnf_user VALUES(null,"HTC","12345678","火腿肠","HTC@qq.com","../img/second-page/15.jpg",1,"12345678915","火腿肠战队",14);
INSERT INTO dnf_user VALUES(null,"MC","12345678","我的世界","MC@qq.com","../img/second-page/16.jpg",1,"12345678916","MineCraft",15);
INSERT INTO dnf_user VALUES(null,"iPad","12345678","iPad","iPad@qq.com","../img/second-page/17.jpg",2,"12345678917","苹果",13);
INSERT INTO dnf_user VALUES(null,"uzi","12345678","狂小狗","uzi@qq.com","../img/second-page/18.jpg",1,"12345678918","rng",5);
INSERT INTO dnf_user VALUES(null,"hanfei","12345678","韩非","hanfei@qq.com","../img/second-page/19.jpg",1,"12345678919","流沙",16);
INSERT INTO dnf_user VALUES(null,"purplegirl","12345678","紫女","purplegirl@qq.com","../img/second-page/20.jpg",4,"12345678920","流沙",16);
INSERT INTO dnf_user VALUES(null,"jimu","12345678","积木","jimu@qq.com","../img/second-page/21.jpg",3,"12345678921","MineCraft",14);
INSERT INTO dnf_user VALUES(null,"abc","12345678","字母A","abc@qq.com","../img/second-page/22.jpg",3,"12345678922","字母炸弹",17);







#select * from dnf_user LEFT OUTER JOIN dnf_dplteam ON tid=teamid;



