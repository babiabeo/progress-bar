/**
 * **pgb** (**p**ro**g**ress **b**ar) - 
 * A simple Deno module helps you to make progress bar in text
 * 
 * @module
 */

/** Defaut symbols for progress bar */
const defaultSymbols = [" ", "#"];

/** Make a simple progress bar */
export function progressBar(
  value: number,
  maxValue: number,
  options: BarOptions = {},
) {
  // Use abs in case the provided number is negative
  const newValue = Math.abs(value);
  const newMaxValue = Math.abs(maxValue);
  const length = Math.abs(options.length ?? 10);

  const emptyBarStart = options.emptyBarStart ?? defaultSymbols[0];
  const emptyBarBody = options.emptyBarBody ?? defaultSymbols[0];
  const emptyBarEnd = options.emptyBarEnd ?? defaultSymbols[0];
  const fullBarStart = options.fullBarStart ?? defaultSymbols[1];
  const fullBarBody = options.fullBarBody ?? defaultSymbols[1];
  const fullBarEnd = options.fullBarEnd ?? defaultSymbols[1];

  const bar = new Array<string>(length);
  const full = Math.floor(length * (newValue / newMaxValue));
  const empty = length - full > 0 ? length - full : 0;

  bar.unshift(full > 0 ? fullBarStart : emptyBarStart);

  if (full <= 0) {
    bar.fill(emptyBarBody, 1, -2);
    bar.push(emptyBarEnd);

    return bar.join("");
  } else if (full >= length) {
    bar.fill(fullBarBody, 1, -2);
    bar.push(fullBarEnd);

    return bar.join("");
  }

  for (let f = 0; f < full - 1; f++) {
    bar.push(fullBarBody);
  }

  for (let e = 0; e < empty - 1; e++) {
    bar.push(emptyBarBody);
  }

  bar.push(emptyBarEnd);

  return bar.join("");
}

export interface BarOptions {
  length?: number;
  fullBarStart?: string;
  fullBarBody?: string;
  fullBarEnd?: string;
  emptyBarStart?: string;
  emptyBarBody?: string;
  emptyBarEnd?: string;
}
