# pb

A simple Deno module helps you to make progress bar in text

## Usage

```ts
import { progressBar } from "https://deno.land/x/pb/mod.ts";

const value = 12;
const maxValue = 20;
const pb = progressBar({ value, maxValue });

console.log(`[${pb}] ${(value / maxValue) * 100}%`);    // [######    ] 60%

```

or you can run:

```sh
deno run https://deno.land/x/pb/example.ts
```

## Options

Here are some additional support options:

```ts
export interface BarOptions {
  length?: number;          // The length of progress bar (default: 10)
  fullBarStart?: string;    // The first symbol for full bar (default: "#")
  fullBarBody?: string;     // The body symbol for full bar (default: "#")
  fullBarEnd?: string;      // The last symbol for full bar (default: "#")
  emptyBarStart?: string;   // The first symbol for empty bar (default: " ")
  emptyBarBody?: string;    // The body symbol for empty bar (default: " ")
  emptyBarEnd?: string;     // The last symbol for empty bar (default: " ")
}
```

## License

See [LICENSE](./LICENSE)
