const secret = require("./secret");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");



let users =require("fs").readFileSync(__dirname+"/users.json").toString();
users=JSON.parse(users);


module.exports=function(req,res,next){
    
   let user = users.filter(function(u){
    if(req.body.email === u.email)
    {return true;}
});

if(user.length===1)
{
     const password = req.body.password;
     const hash = user[0].password; 
     
     bcrypt.compare(password,hash,function(err,success){
      
         if(success){

             const token = jwt.sign({email:user[0].email},secret,{expiresIn:180})


             res.cookie("token",token,{httpOnly:true,sameSite:"Strict"});
             res.redirect("/secret");
         }
         else{ 
             res.redirect("/login?fel");
         }

     });

}
else{ 
    res.send("no such user");
}


}