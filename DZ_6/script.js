// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const link = document.getElementById("super_link");
console.log(link);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardLinks = document.querySelectorAll(".card-link");
cardLinks.forEach((element) => {
  element.textContent = "ссылка";
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const cardBody = document.querySelectorAll(".card-body .card-link");
console.log(cardBody);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const firstElementDataNumber50 = document.querySelector("[data-number = '50']");
console.log(firstElementDataNumber50);

// 5. Выведите содержимое тега title в консоль.

console.log(document.title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const parentOfCardTitle = document.querySelector(".card-title").parentNode;
console.log(parentOfCardTitle);

// 7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const newParagraph = document.createElement("p");
newParagraph.textContent = "Привет";
const firstElementClassCard = document.querySelector(".card");
firstElementClassCard.prepend(newParagraph);

// 8. Удалите тег h6 на странице.

const h6 = document.querySelector("h6");
h6.remove();

// document.querySelector("h6").remove();
