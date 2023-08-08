const { Router } = require("express");

const NotesController = require("../controllers/NotesControlller");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.post("/:user_id",notesController.create);
notesRoutes.get("/:id",notesController.show);
notesRoutes.delete("/:id",notesController.delete)


module.exports = notesRoutes;
