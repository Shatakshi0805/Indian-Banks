const express = require("express");
const app = express();

const banksRouter = require("./routes/bankRoutes");

app.use(express.json());

app.use("/api/v1/banks", banksRouter);

console.log(process.env);

app.listen("8000", () => {
    console.log("Server listening on port 8000...");
  
})
