// 1) Реализовать класс, описывающий окружность.В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get - свойство, возвращающее радиус окружности;
// set - свойство, устанавливающее радиус окружности;
// get - свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 

class Circle {
    constructor(radiusConst) {
        this.radius = radiusConst;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {

        this._radius = value;
    }
    get diametr() {
        let diametr = 2 * this.radius
        return diametr;
    }

    length() {
        let length = 2 * Math.PI * this.radius;
        return `length: ${length}`;
    }
    ploscha() {
        let ploscha = 2 * Math.PI * (Math.pow(this.radius, 2));
        return `ploscha: ${ploscha}`;

    }
}
let one = new Circle(10);

console.log('Діаметр: ' + one.diametr);
console.log('Радіус: ' + one.radius);
console.log(one.length());
console.log(one.ploscha());

// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов.



// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
class Employee {
    constructor(name, experience, age) {
        this.name = name;
        this.experience = experience;
        this.age = age;
    }
}
let listEmployee = [{
    name: "Tania",
    experience: "1 years",
    age: 19
}, {
    name: "Taras",
    experience: "5 years",
    age: 26
}, {
    name: "Igor",
    experience: "3 years",
    age: 40
}];
class EmpTable {
    constructor(arr) {
        this.listEmployee = arr;

    }
    getHtml() {
        document.write(`<table>
        <tr>
            <th>Name</th>
            <th>Experience</th>
            <th>Age</th>
        </tr>
        
    `)
        for (let i of this.listEmployee) {
            document.write(`<tr>
            <td> ${i.name}</td>
            <td>${i.experience}</td>
            <td> ${i.age}</td>
        </tr>`)
        }
        document.write(`</table>`)
    }
}
let job = new EmpTable(listEmployee);
job.getHtml();