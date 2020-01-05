const userController = require("../controllers/user.controller");

module.exports = app => {
    app.get("/api/user/:id", userController.getUser);
    app.get("/api/user/but/:id", userController.getAllUsersBut);
    app.post("/api/user/create", userController.createUser);
    app.post("/api/user/login", userController.login);
    app.post("/api/user/email", userController.checkEmail);
    app.post("/api/user/username", userController.checkUsername);
    app.post("/api/user/password", userController.checkPassword);
}