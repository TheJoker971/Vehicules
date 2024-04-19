import {config} from "dotenv";
config();

import express, {Request, Response} from "express";

const app = express();

app.get('/', function (req:Request, res: Response) {
    res.send('JOACKIM');
})


app.listen(process.env.PORT, function () {
    console.log(`Listening on ${process.env.PORT}`)
});