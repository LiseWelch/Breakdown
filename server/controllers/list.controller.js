const pList = require("../models/list.model");

module.exports.getOneList = (req,res) => {
    pList.findOne({ _id: req.params.id })
        .then(list => res.json(list))
        .catch(err => res.json(err));
};

module.exports.getAllList = (req,res) => {
    pList.find({ projectID: req.params.id })
        .then(lists => res.json(lists))
        .catch(err => res.json(err));
};

module.exports.editList = (req,res) => {
    pList.update({ _id: req.params.id }, {$set: { listName: req.body.listName} })
        .then(list => res.json(list))
        .catch(err => res.json(err));
};

module.exports.deleteList = (req,res) => {
    pList.deleteOne({ _id: req.params.id })
        .then(list => res.json(list))
        .catch(err => res.json(err));
};

module.exports.createList = (req,res) => {
    pList.create(req.body)
        .then(list => res.json(list))
        .catch(err => res.json(err));
};