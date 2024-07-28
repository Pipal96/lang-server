import express from "express";
import {setMiddlewares} from "./middlewares/index.js";
import {logger} from "./modules/logger.js";
import 'dotenv/config'

console.log(process.env.HOST, process.env.PORT)

const application = express();

setMiddlewares(application);
application.listen(process.env.PORT, () => {
    logger.info(`  Listening on http://${location.host}:${process.env.PORT}`);
});