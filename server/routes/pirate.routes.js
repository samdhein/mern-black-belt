const PirateController = require("../controllers/pirate.controller")
const Pirate = require("../models/pirate.model")

// initially comment all but the index

module.exports = app => {
    // console.log("server/routes")
    app.get("/api", PirateController.index) // root
    app.post("/api/pirates", PirateController.createPirate) // create a pirate
    app.get("/api/pirates", PirateController.allPirates)  // get all pirates
    app.get("/api/pirates/:id", PirateController.onePirate) // get one author (:keyname must match req.params.keyname in controller)
    // app.put("/api/authors/:id", AuthorController.updateAuthor) // update one author
    app.delete("/api/pirates/:id", PirateController.deletePirate) // delete one author
}