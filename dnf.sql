SET NAMES UTF8;
DROP DATABASE IF EXISTS dnf;
CREATE DATABASE dnf CHARSET=UTF8;
USE dnf;

#xs 1  gs 2 sc 3 hz 4 mt 5
CREATE TABLE dnf_activity(
   nid INT PRIMARY KEY AUTO_INCREMENT,
   ntime varchar(32),
   nImage varchar(255),
   nPage int
);
insert into dnf_activity values(null,"2018/10/3","../img/main-page/activityxs4.jpg",1);
insert into dnf_activity values(null,"2018/7/31","../img/main-page/activityxs3.jpg",1);
insert into dnf_activity values(null,"2018/8/31","../img/main-page/activityxs2.jpg",1);
insert into dnf_activity values(null,"2018/12/1","../img/main-page/activitygs3.jpg",2);
insert into dnf_activity values(null,"2018/10/10","../img/main-page/activitygs4.jpg",2);
insert into dnf_activity values(null,"2018/11/20","../img/main-page/activitysc2.jpg",3);
insert into dnf_activity values(null,"2018/11/15","../img/main-page/activitysc3.jpg",3);
insert into dnf_activity values(null,"2018/11/30","../img/main-page/activitysc4.jpg",3);
insert into dnf_activity values(null,"2018/10/8","../img/main-page/activityhz1.jpg",4);
insert into dnf_activity values(null,"2018/10/8","../img/main-page/activityhz2.jpg",4);
insert into dnf_activity values(null,"2018/10/8","../img/main-page/activityhz3.jpg",4);
insert into dnf_activity values(null,"2018/10/30","../img/main-page/activityhz4.jpg",4);
insert into dnf_activity values(null,"2018/12/30","../img/main-page/activitymt1.png",5);
insert into dnf_activity values(null,"2018/11/30","../img/main-page/activitymt2.jpg",5);
insert into dnf_activity values(null,"2018/12/1","../img/main-page/activitymt3.png",5);
insert into dnf_activity values(null,"2018/12/1","../img/main-page/activitymt4.jpg",5);
insert into dnf_activity values(null,"2018/10/10","../img/main-page/activitygs1.jpg",2);
insert into dnf_activity values(null,"2018/11/22","../img/main-page/activitysc1.jpg",3);
insert into dnf_activity values(null,"2018/10/5","../img/main-page/activitygs2.jpg",2);
insert into dnf_activity values(null,"2018/11/10","../img/main-page/activityxs1.jpg",1);












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
INSERT INTO dnf_dplteam VALUES(null,"心悦会员","我是会员我怕谁","华北",1,"追风少年","快乐风男","滑行少年","铁头娃");
INSERT INTO dnf_dplteam VALUES(null,"三好学生","企鹅电竞三好学生等待大家进入","华北",0,"","omg","阿斯顿","");
INSERT INTO dnf_dplteam VALUES(null,"芳华","进击总决赛","华北",1,"阿里大佬","","","");
INSERT INTO dnf_dplteam VALUES(null,"rng","s8我吃定了","华西",1,"狂小狗","小米大佬","锅盖侠","终生平等");
INSERT INTO dnf_dplteam VALUES(null,"极冰盛宴","生与死,轮回不止。我们生,他们死!","华东",1,"刹那永恒","LL","","");
INSERT INTO dnf_dplteam VALUES(null,"燃魂军团","杀!!","华北",0,"","乔治","","");
INSERT INTO dnf_dplteam VALUES(null,"木叶忍者","火之意志,由我继承","华西",0,"","日向宁次","","");
INSERT INTO dnf_dplteam VALUES(null,"腾讯战队","不充钱,怎么变强","华南",1,"英雄联盟","马化腾","穿越火线","QQ飞车");
INSERT INTO dnf_dplteam VALUES(null,"网易云音乐","在这里不知能听歌,还能听故事","华东",1,"网易云音乐","","","");
INSERT INTO dnf_dplteam VALUES(null,"网易云游戏","氪金也不一定能变强!","华东",0,"","网易云游戏","","");
INSERT INTO dnf_dplteam VALUES(null,"华为帝国","国产天下第一","华东",1,"华为任正非","华为荣耀","华为Nova","华为V系");
INSERT INTO dnf_dplteam VALUES(null,"苹果","卖肾买我嘛","华西",1,"鬼才乔布斯","iPad","iPhone","iWatch");
INSERT INTO dnf_dplteam VALUES(null,"火腿肠战队","我永远不会凉凉","华北",0,"火腿肠","","","");
INSERT INTO dnf_dplteam VALUES(null,"MineCraft","我的世界,有什么我做不到!","华北",0,"我的世界","","积木","");
INSERT INTO dnf_dplteam VALUES(null,"流沙","这天下我要99分","华东",0,"韩非","","","紫女");
INSERT INTO dnf_dplteam VALUES(null,"字母炸弹","老子天下第一","华北",0,"","","字母A","");
INSERT INTO dnf_dplteam VALUES(null,"绝","这世界都将臣服在我的色泽下","华西",0,"白","黑","","");
INSERT INTO dnf_dplteam VALUES(null,"复仇者","我们被一响指打的稀碎","华西",1,"钢铁侠","雷神","绿巨人","美队");
INSERT INTO dnf_dplteam VALUES(null,"取经队","此乃逗比四人组","华东",1,"唐僧","孙猴子","猪八戒","沙师弟");
INSERT INTO dnf_dplteam VALUES(null,"扑克王","无冕之王","华北",0,"王","皇后","","");
INSERT INTO dnf_dplteam VALUES(null,"动物世界","黑暗森林,适者生存","华西",0,"狮子","","","");
INSERT INTO dnf_dplteam VALUES(null,"伊凡世家","都要死,砍头","华南",0,"伊凡一世","","伊凡三世","");
INSERT INTO dnf_dplteam VALUES(null,"清朝","三代盛世","华东",0,"乾隆","雍正","康熙","");
INSERT INTO dnf_dplteam VALUES(null,"前端大全","无敌啊","华南",0,"","bootstrap","","");



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
INSERT INTO dnf_user VALUES(null,"iPhone","12345678","iPhone","iPhone@qq.com","../img/second-page/23.jpg",3,"12345678923","苹果",13);
INSERT INTO dnf_user VALUES(null,"iWatch","12345678","iWatch","iWatch@qq.com","../img/second-page/24.jpg",4,"12345678924","苹果",13);
INSERT INTO dnf_user VALUES(null,"duoduo","12345678","快乐风男","duoduo@qq.com","../img/second-page/25.jpg",2,"12345678925","心悦会员",2);
INSERT INTO dnf_user VALUES(null,"dada","12345678","滑行少年","dada@qq.com","../img/second-page/26.jpg",3,"12345678926","心悦会员",2);
INSERT INTO dnf_user VALUES(null,"dangdang","12345678","铁头娃","dangdang@qq.com","../img/second-page/27.jpg",4,"12345678927","心悦会员",2);
INSERT INTO dnf_user VALUES(null,"honor","12345678","华为荣耀","honor@qq.com","../img/second-page/28.jpg",2,"12345678928","华为帝国",12);
INSERT INTO dnf_user VALUES(null,"hwNova","12345678","华为Nova","hwNova@qq.com","../img/second-page/29.jpg",3,"12345678929","华为帝国",12);
INSERT INTO dnf_user VALUES(null,"hwV","12345678","华为V系","hwV@qq.com","../img/second-page/30.jpg",3,"12345678930","华为帝国",12);
INSERT INTO dnf_user VALUES(null,"mlxg","12345678","锅盖侠","mlxg@qq.com","../img/second-page/31.jpg",3,"12345678931","rng",5);
INSERT INTO dnf_user VALUES(null,"letme","12345678","众生平等","letme@qq.com","../img/second-page/32.jpg",4,"12345678932","rng",5);
INSERT INTO dnf_user VALUES(null,"mwy","12345678","马来剑","mwy@qq.com","../img/second-page/33.jpg",3,"12345678933","极冰盛宴",6);
INSERT INTO dnf_user VALUES(null,"ten","12345678","十年","ten@qq.com","../img/second-page/34.jpg",4,"12345678934","极冰盛宴",6);
INSERT INTO dnf_user VALUES(null,"CF","12345678","穿越火线","CF@qq.com","../img/second-page/18.jpg",3,"12345678935","腾讯战队",9);
INSERT INTO dnf_user VALUES(null,"LOL","12345678","英雄联盟","LOL@qq.com","../img/second-page/6.jpg",1,"12345678936","腾讯战队",9);
INSERT INTO dnf_user VALUES(null,"FC","12345678","QQ飞车","FC@qq.com","../img/second-page/14.jpg",4,"12345678937","腾讯战队",9);
INSERT INTO dnf_user VALUES(null,"white","12345678","白","white@qq.com","../img/second-page/29.jpg",1,"12345678938","绝",18);
INSERT INTO dnf_user VALUES(null,"black","12345678","黑","black@qq.com","../img/second-page/2.jpg",2,"12345678939","绝",18);
INSERT INTO dnf_user VALUES(null,"Ironman","12345678","钢铁侠","Ironman@qq.com","../img/second-page/7.jpg",1,"12345678940","复仇者",19);
INSERT INTO dnf_user VALUES(null,"Thor","12345678","雷神","Thor@qq.com","../img/second-page/1.jpg",2,"12345678941","复仇者",19);
INSERT INTO dnf_user VALUES(null,"Hulk","12345678","绿巨人","Hulk@qq.com","../img/second-page/22.jpg",3,"12345678942","复仇者",19);
INSERT INTO dnf_user VALUES(null,"captain","12345678","美队","captain@qq.com","../img/second-page/30.jpg",4,"12345678943","复仇者",19);
INSERT INTO dnf_user VALUES(null,"tangsan","12345678","唐僧","tangsan@qq.com","../img/second-page/13.jpg",1,"12345678944","取经队",20);
INSERT INTO dnf_user VALUES(null,"monkey","12345678","孙猴子","monkey@qq.com","../img/second-page/9.jpg",2,"12345678945","取经队",20);
INSERT INTO dnf_user VALUES(null,"pig","12345678","猪八戒","pig@qq.com","../img/second-page/33.jpg",3,"12345678946","取经队",20);
INSERT INTO dnf_user VALUES(null,"lastsha","12345678","沙师弟","lastsha@qq.com","../img/second-page/1.jpg",4,"12345678947","取经队",20);
INSERT INTO dnf_user VALUES(null,"king","12345678","王","king@qq.com","../img/second-page/15.jpg",1,"12345678948","扑克王",21);
INSERT INTO dnf_user VALUES(null,"queen","12345678","皇后","queen@qq.com","../img/second-page/33.jpg",2,"12345678949","扑克王",21);
INSERT INTO dnf_user VALUES(null,"lion","12345678","狮子","lion@qq.com","../img/second-page/3.jpg",1,"12345678950","动物世界",22);
INSERT INTO dnf_user VALUES(null,"yifan1","12345678","伊凡一世","yifan1@qq.com","../img/second-page/19.jpg",1,"12345678951","伊凡世家",23);
INSERT INTO dnf_user VALUES(null,"yifan3","12345678","伊凡三世","yifan3@qq.com","../img/second-page/29.jpg",3,"12345678952","伊凡世家",23);
INSERT INTO dnf_user VALUES(null,"qianlong","12345678","乾隆","qianlong@qq.com","../img/second-page/20.jpg",1,"12345678953","清朝",24);
INSERT INTO dnf_user VALUES(null,"yongzheng","12345678","雍正","yongzheng@qq.com","../img/second-page/11.jpg",2,"12345678954","清朝",24);
INSERT INTO dnf_user VALUES(null,"kangxi","12345678","康熙","kangxi@qq.com","../img/second-page/8.jpg",3,"12345678955","清朝",24);
INSERT INTO dnf_user VALUES(null,"bootstrap","12345678","bootstrap","bootstrap@qq.com","../img/second-page/17.jpg",2,"12345678956","前端大全",25);
































#select * from dnf_user LEFT OUTER JOIN dnf_dplteam ON tid=teamid;



