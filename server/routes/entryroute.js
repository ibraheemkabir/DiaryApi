import express from 'express';

import entrycontroller from '../controllers/routescontroller';

const router = express.Router();

router.get('/', entrycontroller.allentries);
router.get('/:id', entrycontroller.getentry);
router.post('/', entrycontroller.addentry);
router.put('/:id', entrycontroller.updateentry);
router.delete('/:id', entrycontroller.deleteentry);

export default router;
module.exports = router;
