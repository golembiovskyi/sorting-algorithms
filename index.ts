// https://en.wikipedia.org/wiki/Sorting_algorithm
import {bubbleSort, quickSort, mergeSort, insertionSort} from "./sorting-methods";
const array = [58, 12, 89, 73, 44, 68, 90,
    31, 9, 7, 14, 27, 81, 70, 5, 95, 42,
    61, 18, 39, 84, 55, 36, 63, 28];
// const sortedArray = bubbleSort(array);
// const sortedArray = quickSort(array);
// const sortedArray = mergeSort(array);
const sortedArray = insertionSort(array);

console.log(sortedArray);
