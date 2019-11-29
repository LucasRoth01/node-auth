let user =require("fs").readFileSync(__dirname+"/user.json").toString();
user=JSON.parse(user);
console.log(user);