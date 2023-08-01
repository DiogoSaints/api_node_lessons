const AppError = require("../utils/AppError");

class UsersController{
    create(request, response){
    const {name, Email, password} = request.body;
   
    response.json({name, Email, password} ); // Corrigido para res.send() em vez de response.send()
}}


module.exports = UsersController;