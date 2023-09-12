function serialize(numbers) {
    return numbers.map(num => num.toString().padStart(3, '0')).join(' ');
}

function deserialize(serializedStr) {
    return serializedStr.split(' ').map(numStr => parseInt(numStr, 10));
}

// Пример использования
const numbers = [7, 42, 123, 300];
const serialized = serialize(numbers);
console.log("Сериализованная строка:", serialized);

const deserialized = deserialize(serialized);
console.log("Десериализованный массив:", deserialized);


// Тестирование 

function runTests() {
    const testCases = [
        // Простейшие короткие
        [ [1, 2, 3], '001 002 003', 0.5 ],
        [ [10, 20, 30], '010 020 030', 0.5 ],

        // Случайные числа
        [ [17, 42, 123, 256, 99], '017 042 123 256 099', 0.625 ],
        [ [87, 120, 9, 4, 256, 1, 5, 77, 66, 13], '087 120 009 004 256 001 005 077 066 013', 0.5556 ],

        // Граничные случаи
        [ Array(50).fill(1), '001 '.repeat(50).trim(), 0.3333 ],
        [ Array(100).fill(99), '099 '.repeat(100).trim(), 0.1667 ],
        [ Array(500).fill(300), '300 '.repeat(500).trim(), 0.1667 ],
        [ Array(1000).fill(100), '100 '.repeat(1000).trim(), 0.0833 ],
    ];

    for (const [input, expectedSerialized, expectedCompression] of testCases) {
        const serialized = serialize(input);
        const compressionRatio = serialized.length / input.length;

        console.log("Исходный массив:", input);
        console.log("Ожидаемая сериализованная строка:", expectedSerialized);
        console.log("Сериализованная строка:", serialized);
        console.log("Коэффициент сжатия:", compressionRatio.toFixed(4));
        console.log("Тест пройден:", serialized === expectedSerialized && compressionRatio >= expectedCompression);
        console.log("--------------------------------------------");
    }
}

runTests();
