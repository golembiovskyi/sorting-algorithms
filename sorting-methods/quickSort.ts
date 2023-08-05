// https://en.wikipedia.org/wiki/Quicksort
export const quickSort = <T>(array: Array<T>): Array<T> => {
    if (array.length <= 1) return array;

    const pivot = array[Math.floor(array.length / 2)];
    const left: Array<T> = [];
    const middle: Array<T> = [];
    const right: Array<T> = [];

    for (const item of array) {
        if (item < pivot) {
            left.push(item);
        } else if (item > pivot) {
            right.push(item);
        } else {
            middle.push(item);
        }
    }

    return [...quickSort(left), ...middle, ...quickSort(right)];
}
