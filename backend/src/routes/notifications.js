import { Router } from "express";
import { sendWebPush } from "../services/webpush.js";

const router = Router();

router.post("/", async (req, res) => {
  sendWebPush(req.body.message);
  res.send();
});

export default router;
