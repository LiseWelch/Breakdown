const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
    {
        projectName: { type: String, required: true, minlength: 4},
        adminID: { type: String, required: true },
        projectUsers: [{type: mongoose.Schema.Types.ObjectId, ref:"User"}]
    }, { timestamps: true}
);

module.exports = mongoose.model("Project", ProjectSchema);