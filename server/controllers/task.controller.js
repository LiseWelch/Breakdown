const Task = require("../models/task.model");

module.exports.createTask = (req,res) => {
    Task.create(req.body)
        .then(task => res.json(task))
        .catch(err => res.json(err));
};

module.exports.editTask = (req,res) => {
    Task.update({ _id: req.params.id }, {$set: {taskName: req.body.taskName, 
                                                description: req.body.description,
                                                dueDate: req.body.dueDate,
                                                assignedUser: req.body.assignedUser,
                                                estimatedTimeNum: req.body.estimatedTimeNum,
                                                estimatedTimeString: req.body.estimatedTimeString,
                                            }})
                .then(task => res.json(task))
                .catch(err => res.json(err));
};

module.exports.completeTask = (req,res) => {
    Task.update({ _id: req.params.id }, {$set: { complete: true, completedBy: req.body.id}})
        .then(task => res.json(task))
        .catch(err => res.json(err));
};

module.exports.deleteTask = (req,res) => {
    Task.deleteOne({ _id: req.params.id })
        .then(task => res.json(task))
        .catch(err => res.json(err));
};

module.exports.getOneTask = (req,res) => {
    Task.findOne({ _id: req.params.id })
        .then(task => res.json(task))
        .catch(err => res.json(err));
};

module.exports.getAllListTasks = (req,res) => {
    Task.find({ listID: req.params.id }).sort({ createdAt: 1})
        .then(tasks => res.json(tasks))
        .catch(err =>res.json(err));
};

module.exports.getAllUpcoming = (req,res) => {
    Task.find({ createdBy: req.params.id, assignedUser: req.params.id, dueDate: {$gt: Date.now()}, completed: false}).sort({createdAt: 1})
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err));
};

module.exports.getAllCompleted = (req,res) => {
    Task.find({ completedBy: req.params.id }).sort({ createdAt: -1})
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err));
};