import {Router} from "express";
import {router as authRouter} from './auth/index.js'

const router = Router();

router.use('/v1', authRouter, async (req, res) => {
    res.end();
});
export {router};
