import express from 'express';
import { redirectToLongUrl } from '../Controllers/redirects.controller.js';

const router = express.Router();

router.get('/:urlCode', redirectToLongUrl);

export default router;
