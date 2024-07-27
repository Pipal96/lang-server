import {pino} from "pino";

export const logger = pino({
    timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`
});
