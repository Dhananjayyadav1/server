import express from "express";
const router = express.Router();

import { getGenders, getDomains } from '../controllers/filteringController.js';

router.get('/filter/genders', getGenders);
router.get('/filter/domains', getDomains);

export default router;