// https://en.wikipedia.org/wiki/Insertion_sort
export const insertionSort = <T>(array: Array<T>): Array<T> => {
    for (let i = 1; i < array.length; i++) {
        const currentElement = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = currentElement;
    }

    return array;
}
