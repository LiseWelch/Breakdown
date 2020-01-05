const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema (
    {
        listName: { type: String, required: true, minlength: 4 },
        adminID: { type: String, required: true },
        projectID: { type: String, required: true }
    }, { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);