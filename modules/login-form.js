import { builtinModules } from "module";




let html = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>login</title>
</head>
<style>

input{
    display: block;
    padding: 2%;
    width: 500px;
    font-size: 1.3rem;
    box-sizing: border-box;
}
</style>
<body>
    <form action="/login" method="post">
        <input type="email" name ="email" placeholder="email">
        <input type="password" name ="password" placeholder="password">
        <input type="submit" value ="submit" >
    
    </form>
</body>
</html>
`;
module.exports = function(req,res){
    res.send(html);
}