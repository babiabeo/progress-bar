import { assertEquals } from "https://deno.land/std@0.181.0/testing/asserts.ts";
import { progressBar } from "./mod.ts";

Deno.test("output", () => {
  const pb1 = progressBar(20, 20);
  const pb2 = progressBar(0, 20);
  const pb3 = progressBar(12, 20);

  assertEquals(pb1, "##########");
  assertEquals(pb2, "          ");
  assertEquals(pb3, "######    ");
});

Deno.test("custom length", () => {
  const pb1 = progressBar(50, 50, { length: 20 });
  const pb2 = progressBar(0, 50, { length: 20 });
  const pb3 = progressBar(25, 50, { length: 20 });

  assertEquals(pb1, "####################");
  assertEquals(pb2, "                    ");
  assertEquals(pb3, "##########          ");
});

Deno.test("custom symbols", () => {
  const pb1 = progressBar(150, 150, {
    fullBarStart: "<",
    fullBarBody: "=",
    fullBarEnd: ">",
  });
  const pb2 = progressBar(0, 150, {
    emptyBarStart: "/",
    emptyBarBody: ".",
    emptyBarEnd: "\\",
  });
  const pb3 = progressBar(71, 150, {
    fullBarStart: "<",
    fullBarBody: "=",
    fullBarEnd: ">",
    emptyBarStart: "/",
    emptyBarBody: ".",
    emptyBarEnd: "\\",
  });

  assertEquals(pb1, "<========>");
  assertEquals(pb2, "/........\\");
  assertEquals(pb3, "<===.....\\");
});
