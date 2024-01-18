import express from "express";
const router = express.Router();

import { getTeam, addTeam, getTeams } from '../controllers/teamController.js';

router.get('/team', getTeams);
router.get('/team/:id', getTeam);
router.post('/team', addTeam);

export default router;