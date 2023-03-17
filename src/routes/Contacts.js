import { Router } from 'express';
import { registerContact } from '../controllers/Contacts';

const router = Router();

router.post('/createContact', registerContact);

export default router;
