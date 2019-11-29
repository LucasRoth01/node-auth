const jwt = require("jsonwebtoken");
const secret = require("./secret")

function auth(req,res,next)
{
    if(req.cookies.token){
        try{
            let token = jwt.verify(req.cookies.token,secret);

            if(token)
            {
            next();
            }
            else
            {
                res.redirect("/login?invalid-token");
            }
        }
        catch(err)
        {
        
            res.redirect("/login?"+err.message);
        
        }
    }
    
    
}


module.exports = auth;