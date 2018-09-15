import express from 'express';

import usercontroller from '../controllers/authentication';

const router = express.Router();

router.post('/auth/signin/', usercontroller.list);
router.post('/auth/signup/', usercontroller.signUp);

export default router;
module.exports = router;
