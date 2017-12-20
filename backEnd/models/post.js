// need mongoose
// need to instantiate Schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema ( {
    date: {
        type: String,
        required: true
    },

    hellion: {
        type: String,
        required: true
    },

    frustration: {
        type: String,
        enum: ["Insubordination", "Just plain stupid", "Shades of Damien", "BLARGH!"],
        required: true
    },

    severity: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        required: true
    },

    message: String,
    punishment: {
        type: String,
        required: true
    },

    punDone: {
        type: String,
        default: "false"
    }
}, {
    timestamps: true
})

module.exports= mongoose.model("Post", postSchema)
