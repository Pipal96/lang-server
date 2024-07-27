import express from "express";
import {setMiddlewares} from "./middlewares/index.js";
import {logger} from "./modules/logger.js";

const application = express();

setMiddlewares(application);

const PORT = process.env.SERVER_PORT || 3000;

application.listen(PORT, () => {
    logger.info(`  Listening on http://localhost:${PORT}`);
});