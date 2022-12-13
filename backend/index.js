import express from "express";
import cors from "cors";
import nftsRouter from "./src/routes/nfts.js";
import subscriptionsRouter from "./src/routes/subscriptions.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use("/nfts", nftsRouter);
app.use("/subscriptions", subscriptionsRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
