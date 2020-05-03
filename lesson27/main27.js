// 1 Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
let shoppingList = [
    {
        name: 'Bread',
        count: 2,
        buy: 0
    },
    {
        name: 'Water',
        count: 1,
        buy: 1
    },
    {
        name: 'IceCream',
        count: 2,
        buy: 1
    },
    {
        name: 'Fish',
        count: 1,
        buy: 0
    }]

function task1() {
    if (shoppingList.buy == 0) return -1;
    if (shoppingList.buy == 1) return 1;
};
task1();

function addProduct(name, count = 1, buy = 0) {
    const product = shoppingList.find(product => product.name === name);
    if (product) return product.count += count;

    shoppingList.push({
        name,
        count,
        buy
    });
}
function checkBuy(name) {
    shoppingList.find(product => {
        if (product.name === name && product.buy === 0)
            product.buy = 1;
    });
}
//2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

const checkProducts = [
    {
        name: 'Tomato',
        count: 8,
        price: 3
    },
    {
        name: 'Cocos',
        count: 1,
        price: 15
    },
    {
        name: 'Сucumber',
        count: 5,
        price: 5
    },
    {
        name: 'Rice',
        count: 2,
        price: 8
    }
];
function printCheck(checkProducts) {
    let checkResult = '';
    let total = 0;
    let totalCount = 0;
    // самой дорогой покупки в чеке
    checkProducts.sort((a, b) => {
        return b.price - a.price;
    });

    for (let i = 0; i < checkProducts.length; i++) {
        checkResult += `Name: ${checkProducts[i].name} \n Count: ${checkProducts[i].count} \nPrice: ${checkProducts[i].price} \n`;
        // Подсчет общей суммы покупки
        total += checkProducts[i].count * checkProducts[i].price;
        //  Подсчет средней стоимости одного товара в чеке
        totalCount += checkProducts[i].count;
    }
    checkResult += `Most expancive product: ${checkProducts[0].name} \nTotal price: ${total} \nMiddle product price ${(total / totalCount)}`;

    return checkResult;
}
console.log(printCheck(checkProducts));