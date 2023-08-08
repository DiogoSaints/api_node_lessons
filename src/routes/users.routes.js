const { Router } = require("express");
const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function myMiddleware(request,response, next){
    console.log("você passou pelo middler");
    next();

}





const userController = new UsersController();

usersRoutes.post("/",myMiddleware, userController.create);
usersRoutes.put("/:id",userController.update);


module.exports = usersRoutes;
