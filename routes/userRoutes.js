import express from "express";
const router = express.Router();

import { getUsers, getUser, addUser, updateUser, deleteUser } from '../controllers/userController.js';

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', addUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;