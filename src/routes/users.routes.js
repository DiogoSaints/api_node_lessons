const {Router} = require("express");

const UsersController = require("../controllers/userController")

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", UsersController.create);
    

module.exports = usersRoutes;
