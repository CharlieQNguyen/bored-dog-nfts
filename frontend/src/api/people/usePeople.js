import { useQuery } from "@tanstack/react-query";
import { peopleAxios } from "./axios";

const getPeople = async () => (await peopleAxios.get("/people")).data;

export const usePeople = () => useQuery(["people"], getPeople);