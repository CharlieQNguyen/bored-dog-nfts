import { useMutation } from "@tanstack/react-query";
import { subscriptionsAxios } from "./axios";

export const createSubscription = async (subscription) =>
  await subscriptionsAxios.post("/", subscription);

export const useSubscription = () =>
  useMutation((subscription) => createSubscription(subscription));
