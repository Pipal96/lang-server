import {Router} from "express";

const router = Router();

router.get('/auth', async (req, res) => {
    console.log(req.url)
    res.end("hello world")
});

export {router}