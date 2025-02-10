import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.json({ title: 'Get all subscription' }));
subscriptionRouter.get('/:id', (req, res) => res.json({ title: 'Get subscription details' }));
subscriptionRouter.post('/', (req, res) => res.json({ title: 'Create subscription' }));
subscriptionRouter.put('/:id', (req, res) => res.json({ title: 'Update subscription' }));
subscriptionRouter.delete('/', (req, res) => res.json({ title: 'Delete subscription' }));
subscriptionRouter.get('/user/:id', (req, res) => res.json({ title: 'Get user subscription' }));
subscriptionRouter.get('/:id/cancel', (req, res) => res.json({ title: 'Cancel subscription' }));
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.json({ title: 'Get upcoming renewal subscription' }));

export default subscriptionRouter;
