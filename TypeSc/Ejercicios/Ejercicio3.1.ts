function add(x: number, y: number | string): number {
    const parsedY = Number(y);

    if (isNaN(parsedY)) {
        return x;
    }

    return x + parsedY;
}

function sumArray(numbers: (number | string)[]): number {
    return numbers.reduce(add, 0);
}

const someSum = sumArray(["3", "6", "9", "h"]);

console.log("[Ejercicio 3.1]", `3 + 6 + 9 === ${someSum}`);