    //step-1 
const express = require("express");
const { request } = require("http");

//step-2
const app = express();

//step-3

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT} NO`)
})


// attach middleware if you getting undefiend data from the body
app.use(express.json())


// step-4

app.get("/", (request, response) => {
    response.send(`<b>This is Home page </b>`)
})


//step-5 
const getDbConnection = require("./configuration/DBConnect.js");
getDbConnection();


//step-7 
const Company = require("./routes/Company.js");

//step-8
app.use("/api/v1/company", Company);
