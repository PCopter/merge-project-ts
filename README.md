# Merge Project

A simple **TypeScript project** with unit tests using **Jest** and **ts-jest**.  
This project demonstrates implementing a custom `merge` function to combine three sorted arrays into one ascending sorted array (without using `sort()`).

---

## 🚀 Features
- Written in **TypeScript**
- Unit testing with **Jest + ts-jest**
- No built-in `sort()` used
  
---

## ⚙️ Setup

Clone this repository and install dependencies:

```bash
git clone https://github.com/PCopter/merge-project-ts.git
cd merge-project-ts
npm install
```
## Run all unit tests:
```bash
npm test
```
```sql
 PASS  __tests__/index.test.ts
  merge()
    √ should merge three arrays correctly (3 ms)
    √ should merge three arrays correctly (1 ms)
    √ should handle empty arrays
    √ should handle duplicates (1 ms)
    √ should handle single element arrays

Test Suites: 1 passed, 1 total                                                                                                                                 
Tests:       5 passed, 5 total                                                                                                                                 
Snapshots:   0 total
Time:        2.22 s, estimated 3 s
Ran all test suites.
```
