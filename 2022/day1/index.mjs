import {
  readInput,
  splitElfs,
  sumCalories,
  compareNumbers
} from './utils.mjs';

const input = await readInput(process.argv[2] || './test-input');

const result = splitElfs(input)
  .map(elf => sumCalories(elf))
  .sort(compareNumbers)
  .pop()

console.log(result);
