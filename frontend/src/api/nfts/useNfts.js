import { useQuery } from "@tanstack/react-query";
import { nftsAxios } from "./axios";

const getNfts = async () => (await nftsAxios.get("/")).data;

export const useNfts = () => useQuery(["nfts"], getNfts);
