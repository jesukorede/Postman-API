import express from 'express';

import { CreateUser, getUsers, getUser, deleteUser, patchOrUpdateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', CreateUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', patchOrUpdateUser);

export default router;