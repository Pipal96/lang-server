import {pino} from "pino";

export const logger = pino({
    level: 'trace',
    timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`
});