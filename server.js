const express = require("express");
const app = express();
const mainRouter = require("./routes/main");

app.use(express.static("public"));

app.use("/", mainRouter);

const PORT = 5001;
app.listen(PORT, console.log(`Server is listening on port: ${PORT}`));
