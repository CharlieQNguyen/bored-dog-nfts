import express from "express";
import nftsRouter from "./src/routes/nfts.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use("/nfts", nftsRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
