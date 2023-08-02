require("express-async-errors")

const database = require("./database/sqlite");


const AppError = require("./utils/AppError")
const express = require("express");
require("express-async-errors")

const routes = require("./routes")

const app = express();
app.use(express.json());


app.use(routes);

database();

app.use((error, request, response, nex) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).jason({
            status: "error",
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).jason({
        status:"error",
        message:"internal server error"
    })
})

database();


const PORT = 3333;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

