import { Router } from "express";
import { sendWebPush } from "../services/webpush.js";
import { createNft, findAllNfts } from "../stores/nfts.js";

const router = Router();

router
  .get("/", async (_, res) => {
    const nfts = await findAllNfts();
    res.json(nfts);
  })
  .post("/", async (req, res) => {
    const nft = await createNft(req.body);
    sendWebPush("New Bored Dog NFT just dropped!");
    res.json(nft);
  });

export default router;
