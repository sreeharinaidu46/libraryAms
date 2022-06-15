const mongoose = require("mongoose");

const AverageDateSchema = new mongoose.Schema({
    id: {
        type: Number,

    },
    average: {
        type: Number

    }
});

module.exports = mongoose.model("AvgDate", AverageDateSchema);