// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

const pizzaMargarita = 'Пицца "Маргарита"';
const pizzaPepperoni = 'Пицца "Пепперони"';
const sushiPhiladelphia = 'Суши "Филадельфия"';
const sushiCalifornia = 'Суши "Калифорния"';
const tiramisu = "Тирамису";
const cheeseCake = "Чизкейк";

const cookViktor = "Виктор";
const cookOlga = "Ольга";
const cookDmitrii = "Дмитрий";

const cooksAndDishes = new Map();
cooksAndDishes
    .set(pizzaMargarita, cookViktor)
    .set(pizzaPepperoni, cookViktor)
    .set(sushiCalifornia, cookOlga)
    .set(sushiPhiladelphia, cookOlga)
    .set(tiramisu, cookDmitrii)
    .set(cheeseCake, cookDmitrii);

// console.log(cooksAndDishes);

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

cooksAndDishes.forEach((value, key, map) => {
    console.log(`${key} - повар: ${value}`);
});

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const clientAleksey = {
    name: "Алексей",
};

const clientMaria = {
    name: "Мария",
};

const clientIrina = {
    name: "Ирина",
};

const clientOrders = new Map();

clientOrders
    .set(clientAleksey, [pizzaPepperoni, tiramisu])
    .set(clientMaria, [sushiCalifornia, pizzaMargarita])
    .set(clientIrina, [cheeseCake]);

clientOrders.forEach((value, key, map) => {
    console.log(`Клиент ${key.name} заказал(а): ${[...value].join(" и ")}.`);
});
