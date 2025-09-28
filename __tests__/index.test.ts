import { merge } from "../src/index";

describe("merge()", () => {
  test("should merge three arrays correctly", () => {
    const c1 = [1, 3, 5];
    const c2 = [9, 7, 4]; // descending
    const c3 = [6, 8, 10];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("should merge three arrays correctly", () => {
    const c1 = [1, 3, 5];
    const c2 = [9, 7, 4]; // descending
    const c3 = [2, 8, 10]; // some elements in c3 less than some elements in c1

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1,2, 3, 4, 5, 7, 8, 9, 10]);
  });

  test("should handle empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("should handle duplicates", () => {
    const c1 = [1, 2, 2];
    const c2 = [4, 3]; // descending
    const c3 = [2, 5];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 2, 2, 3, 4, 5]);
  });

  test("should handle single element arrays", () => {
    expect(merge([1], [2], [3])).toEqual([1, 2, 3]);
  });
});
