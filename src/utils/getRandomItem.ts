import { randomInt } from "crypto";

const getRandomItem = (items: any[]) => {
  return items[randomInt(items.length)];
};

export default getRandomItem;
