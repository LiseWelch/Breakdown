const projectController = require("../controllers/project.controller");

module.exports = app => {
    app.post("/api/project/create", projectController.createProject);
    app.put("/api/project/edit/:id", projectController.editProjectName);
    app.put("/api/project/add/user/:id", projectController.addUserToProject);
    app.delete("/api/project/remove/:id", projectController.deleteProject);
    app.get("/api/project/:id", projectController.getOneProject);
    app.get("/api/project/all/:id", projectController.getAllProjects);
    app.put("/api/project/remove/user/:id", projectController.removeUser);
}