import {Router} from 'express';
import { sendReminder } from '../controllers/workflow.controller.js';

const workflowRouter = Router();

workflowRouter.post('/subscription/reminder',sendReminder);

export default workflowRouter;
