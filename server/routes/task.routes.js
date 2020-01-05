const taskController = require("../controllers/task.controller");

module.exports = app => {
    app.post("/api/task/create", taskController.createTask);
    app.put("/api/task/edit/:id", taskController.editTask);
    app.put("/api/tasks/complete/:id", taskController.completeTask);
    app.delete("/api/task/remove/:id", taskController.deleteTask);
    app.get("/api/task/one/:id", taskController.getOneTask);
    app.get("/api/task/list/:id", taskController.getAllListTasks);
    app.get("/api/task/upcoming/:id", taskController.getAllUpcoming);
    app.get("/api/task/completed/:id", taskController.getAllCompleted);
}