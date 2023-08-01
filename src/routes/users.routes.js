const { Router } = require("express");
const UsersController = require("../controllers/usersController");

const usersRoutes = Router();

function myMiddleware(request,response, next){
    console.log("você passou pelo middler");
    next();

}





const userController = new UsersController();

usersRoutes.post("/",myMiddleware, userController.create);

module.exports = usersRoutes;
