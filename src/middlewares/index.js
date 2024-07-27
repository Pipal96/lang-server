import {json, urlencoded} from "express";
import {router} from "../routers/index.js";
import {logger} from "../modules/logger.js";
import helmet from "helmet";

export const setMiddlewares = (app) => {
    app.use((err, req, res, next) => {
        logger.error(err);
        next()
    })
    app.use((req, res, next) => {
        logger.trace(req);
        next()
    })
    // app.use(helmet())
    app.use(json());
    app.use(urlencoded({extended: true}));
    app.use(router);
};
