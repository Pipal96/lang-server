import express from "express";
import {setMiddlewares} from "./middlewares/index.js";
import {logger} from "./modules/logger.js";
import 'dotenv/config'

const application = express();

setMiddlewares(application);
application.listen(process.env.PORT, () => {
    logger.info(`  Listening on: ${process.env.PORT} port`);
});