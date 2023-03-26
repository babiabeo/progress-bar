import { progressBar } from "./mod.ts";

const value = 12;
const maxValue = 20;
const pb = progressBar(value, maxValue);

console.log(`[${pb}] ${(value / maxValue) * 100}%`);
