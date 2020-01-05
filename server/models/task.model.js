const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema (
    {
        taskName: { type: String, required: true, minlength: 4 },
        description: { type: String, required: false, default: '' },
        completed: { type: Boolean, required: true, default: false },
        completedBy: { type: String, required: false},
        createdBy: { type: String, required: true},
        listID: { type: String, required: true },
        dueDate: { type: Date, required: false },
        assignedUser: { type: String, required: false },
        estimatedTimeNum: { type: Number, required: false },
        estimatedTimeString: { type: String, required: false }
    }, { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);