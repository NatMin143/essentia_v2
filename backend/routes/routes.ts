import { Router } from 'express';
import { getAiResponse } from '../controllers/apiController';

const router = Router()

router.post('/ai-response', getAiResponse);

export default router