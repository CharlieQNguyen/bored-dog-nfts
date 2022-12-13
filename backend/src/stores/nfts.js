import db from "./db.js";

const nfts = db.table("nfts");

export const findAllNfts = async () => {
  return await nfts.findAll();
};

export const createNft = async (nft) => {
  return await nfts.create(nft);
};
