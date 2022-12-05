import {
  readInput,
  splitElfs,
  sumCalories,
  compareNumbers
} from './utils.mjs';

const input = await readInput(process.argv[2] || './test-input');

export const getHighestCaloriesBackpack = () => {
  return splitElfs(input)
  .map(elf => sumCalories(elf))
  .sort(compareNumbers)
  .pop()
}

console.log(getHighestCaloriesBackpack());
