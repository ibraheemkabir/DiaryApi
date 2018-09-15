import express from 'express';

import entry from '../controllers/entrycontroller';

import entrycontroller2 from '../controllers/routescontrollerv2';

import authorize from '../helpers/authorize';

const router = express.Router();

router.post('/', authorize, entry.addentry, entrycontroller2.addentry);
router.get('/', authorize, entry.allentries, entrycontroller2.allentries);
router.get('/:id', authorize, entry.getentry, entrycontroller2.getentry);
router.delete('/:id', authorize, entry.deleteentry, entrycontroller2.deleteentry);
router.put('/:id', authorize, entry.updateentry, entrycontroller2.updateentry);

export default router;
module.exports = router;
