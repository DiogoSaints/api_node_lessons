const AppError = require("../utils/AppError");

class UsersController{
    create(request, response){
    const {name, Email, password} = request.body;
   
        if(!name){
            throw new AppError("nome é obrigatório!");

        }

    response.json({name, Email, password} ); // Corrigido para res.send() em vez de response.send()
}}


module.exports = UsersController;