import * as express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function (req: express.Request, res, next) {
    res.render('index');
});

export default router;