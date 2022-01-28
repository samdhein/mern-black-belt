const mongoose = require('mongoose')

// create a schema
const PirateSchema = new mongoose.Schema({
    name: {
        type: String,   // (String, Number, Boolean, Array)
        required : [true, "Name is required"],  // validation
    },
    img_url: {
        type: String, 
        required : [true, "Image URL is required"],  // validations
    },
    treasure_chests: {
        type: Number, 
        required : [true, "# of treasure chests is required"],  // validations
    },
    catch_phrase: {
        type: String, 
        required : [true, "Catch phrase is required"],  // validations
    },
    crew_position: {
        type: String, 
        required : [true, "Crew Position is required"],  // validations
    },
    peg_leg: {
        type: Boolean, 
        required : [true, "Peg leg is required"],  // validations
    },
    eye_patch: {
        type: Boolean, 
        required : [true, "Eye patch is required"],  // validations
    },
    hook_hand: {
        type: Boolean, 
        required : [true, "Hook hand is required"],  // validations
    },

}, {timestamps: true})

// export
const Pirate = mongoose.model('Pirate', PirateSchema)
module.exports = Pirate