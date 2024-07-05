// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const albums = [
    { title: "Дорога в облака", artist: "Браво", year: "1994" },
    { title: "На перекрестках весны", artist: "Браво", year: "1996" },
];

const musicCollection = {
    albums: albums,
    *[Symbol.iterator]() {
        for (const album of albums) {
            yield album;
        }
    },
};

console.log(musicCollection);

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}