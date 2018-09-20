import express from 'express';

import entry from '../controllers/entrycontroller';

import entrycontroller2 from '../middleware/routescontrollerv2';

import authorize from '../helpers/authorize';

const router = express.Router();

router.post('/', authorize, entrycontroller2.addentry, entry.addentry);
router.get('/', authorize, entrycontroller2.allentries, entry.allentries);
router.get('/:id', authorize, entrycontroller2.getentry, entry.getentry);
router.delete('/:id', authorize, entrycontroller2.deleteentry, entry.deleteentry);
router.put('/:id', authorize, entrycontroller2.updateentry, entry.updateentry);

export default router;
module.exports = router;
