import express from 'express';
import { helloWorld, saveUrl, getUrl } from '../controllers/urlController';

const router = express.Router();

router.get('/', helloWorld);
router.post('/', saveUrl);
router.get('/:uri', getUrl);

export default router;
