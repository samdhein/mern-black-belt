const Pirate = require("../models/pirate.model")

module.exports.index = (req, res) => {
    res.json({message: "Hello, you've reached the pirate index"})
}

// show all pirates
module.exports.allPirates = (req, res) => {
    Pirate.find().sort({name: 1})
        .then(pirates=>res.json(pirates))
        .catch(err=> res.status(400).json(err))
}

// create pirate
module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err=> res.status(400).json(err))
}

// show one pirate
module.exports.onePirate = (req, res) => {
    Pirate.findOne({_id: req.params.id})
        .then(pirate => res.json(pirate))
        .catch(err=> res.status(400).json(err))
}

// update one author
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params.id},  // need id
        req.body, // need body
        { new: true, runValidators: true }  // need in order to apply validations to update
        )
        .then(author => res.json(author))
        .catch(err=> res.status(400).json(err))
}

// delete one pirate
module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err=> res.status(400).json(err))
}