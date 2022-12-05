import { readFile } from 'node:fs/promises';

/**
  * Creates an array based on the items of a specific elf, and converts each
  * from String to Number
  *
  * @param backpack - Array<String>
  * @returns Array<Number>
  */
export const parseItems = (backpack) => { 
  return backpack
    .split('\n')
    .map(item => parseInt(item));
}

/**
  * Parses the input string into an array of elfs. Elfs are separated by two linebreaks, so we
  * parse it whenever we see '\n\n'
  *
  * @param input - String
  * @returns Array
  */
export const splitElfs = (input) => {
  return input
    .split('\n\n')
    .map(elfItems => parseItems(elfItems))
};

/**
  * Reads a file buffer and returns a string 
  *
  * @param filePath - String
  * @returns String
  */
export const readInput = async (filePath) => {
  try {
    return readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      return data;
    })
  } catch (err) {
    throw err;
  }
} 

/**
  * Sums the calories of a backpack
  *
  * @param elf - Array<Number>
  * @returns - Array<Number>
  */
export const sumCalories = (elf) => {
  return elf.reduce((acc, current) => {
    return current ? acc + current : acc
  })
}

/**
  * Helper function so we can sort the final array
  * 
  * @param a - Number
  * @param b - Number
  * @returs Number
  */
export const compareNumbers = (a, b) => {
  return a - b;
}
