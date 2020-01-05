const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/FinalProject", {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Successfully connected to the database"))
.catch(err => console.log(err));