/**
 * Merge 3 sorted arrays into ascending order.
 * จากโจทย์
 * input คือ int[Array] สาม int[Arrays] โดยแต่ละตัวมีคุณสมบัติดังนี้
 * outputคือ รวม Arrayทั้ง3ตัวเข้าด้วยกันโดยสมาชิกใน Arrays เรียงจากน้อย --> มากด้วย
 * @param collection_1 ascending [เรียงจากน้อย --> มาก] 
 * @param collection_2 descending[เรียงจากมาก --> น้อย] 
 * @param collection_3 ascending [เรียงจากน้อย --> มาก] 
 * @returns merged array in ascending order
 */
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // Step 1: reverse collection_2 (เพราะว่าตอนนี้ เรียงจากมาก --> น้อยอยู่)
  const col2Asc: number[] = [];
  for (let i = collection_2.length - 1; i >= 0; i--) {
    col2Asc.push(collection_2[i]);
  }

  // Step 2: merge collection_1 and col2Asc
  const merged12 = mergeTwo(collection_1, col2Asc);

  // Step 3: merge with collection_3
  const finalMerged = mergeTwo(merged12, collection_3);

  return finalMerged;
}

/**
 * Merge two sorted ascending arrays without using sort()
 * ฟังก์ชั่นสำหรับรวม 2 arrays ที่เรียงลำดับจากน้อยไปมากแล้ว โดยไม่ใช่ sort()
 */
function mergeTwo(arr1: number[], arr2: number[]): number[] {
  let i = 0,
    j = 0;
  const result: number[] = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // push the remaining elements ตัวที่เหลือ
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

