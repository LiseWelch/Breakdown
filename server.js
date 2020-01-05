const express = require("express");
const path = require("path");
const session = require('express-session');
const app = express();

require("./server/config/mongoose.config");

app.use(
    express.json(),
    express.urlencoded({ extended: true }),
    express.static(__dirname + "/public/dist/public"),
    session({
        secret: 'keyboardkitteh',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    })
);

require("./server/routes/project.routes")(app);
require("./server/routes/task.routes")(app);
require("./server/routes/user.routes")(app);
require("./server/routes/list.routes")(app);

app.get('/check/user', (req,res) => {
    if (!req.session.user)
        {
           res.json({check: false});
        }
    else 
    {
        res.json({check: true});
    }
});

app.get('/check/id', (req,res) => {
    res.json({id: req.session.user});
})

app.post('/check/loggin', (req, res) => {
    req.session.user = req.body.userID;
    res.json({check: true, id: req.session.user});
});

app.all("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "./public/dist/public/index.html"))
);

app.listen(8000, () => console.log("Listening on localhost:8000"));