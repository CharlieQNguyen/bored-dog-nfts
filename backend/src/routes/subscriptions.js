import { Router } from "express";
import { createSubscription } from "../stores/subscriptions.js";

const router = Router();

router.post("/", async (req, res) => {
  const subscription = await createSubscription(req.body);
  res.json(subscription);
});

export default router;
