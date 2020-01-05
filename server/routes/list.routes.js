const pListController = require("../controllers/list.controller")

module.exports = app => {
    app.get("/api/list/one/:id", pListController.getOneList);
    app.get("/api/list/all/:id", pListController.getAllList);
    app.put("/api/list/edit/:id", pListController.editList);
    app.delete("/api/remove/:id", pListController.deleteList);
    app.post("/api/list/new", pListController.createList);
}