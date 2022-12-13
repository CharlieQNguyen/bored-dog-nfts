import db from "./db.js";

const subscriptions = db.table("subscriptions");

export const findAllSubscriptions = async () => {
  return await subscriptions.findAll();
};

export const createSubscription = async (subscription) => {
  return await subscriptions.create(subscription);
};
