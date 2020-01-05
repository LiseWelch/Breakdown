const Project = require("../models/project.model");

module.exports.createProject = (req,res) => {
    Project.create(req.body)
        .then(project => res.json(project))
        .catch(err => res.json(err));
};

module.exports.editProjectName = (req,res) => {
    Project.updateOne({ _id: req.params.id }, {$set: { projectName: req.body.projectName}})
        .then(project => res.json(project))
        .catch(err => res.json(err));
};

module.exports.addUserToProject = (req,res) => {
    Project.updateOne( {_id: req.params.id}, {$addToSet: {projectUsers: req.body.id}})
        .then(project => res.json(project))
        .catch(err => res.json(err));
};

module.exports.deleteProject = (req,res) => {
    Project.deleteOne({ _id: req.params.id })
        .then(project => res.json(project))
        .catch(err => res.json(err));
};

module.exports.getOneProject = (req,res) => {
    Project.findOne({ _id: req.params.id }).populate("projectUsers")
        .then(project => res.json(project))
        .catch(err => res.json(err));
};

module.exports.getAllProjects = (req,res) => {
    Project.find({ projectUsers: {$in: [req.params.id]} }).sort({ projectName: 1 })
        .then(projects => {
            res.json(projects);
        })
        .catch(err => res.json(err));
};

module.exports.removeUser = (req,res) => {
    Project.update({ _id: req.params }, {$pull: {projectUsers: req.body.id}})
        .then(project => res.json(project))
        .catch(err => res.json(err));
};