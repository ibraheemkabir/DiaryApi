import express from 'express';

import entries from '../models/entries';

import entrycontroller2 from '../controllers/routescontrollerv2';

import authorize from '../helpers/authorize';

const router = express.Router();

router.get('/', authorize, entrycontroller2.allentries, entries.allentries);
router.get('/:id', authorize, entrycontroller2.getentry, entries.getentry);
router.post('/', authorize, entrycontroller2.addentry, entries.addentry);
router.put('/:id', authorize, entrycontroller2.updateentry, entries.updateentry);
router.delete('/:id', authorize, entrycontroller2.deleteentry, entries.deleteentry);

export default router;
module.exports = router;
