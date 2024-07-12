// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

const divContainerReviewsEl = document.querySelector("div.container-reviews");
const reviewsData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];
console.log(reviewsData);

const deviceNameEl = document.querySelector("h3.device-name");
const reviewsBoxEl = document.querySelector("div.reviews-box");
const reviewEl = document.querySelector("div.review");
const reviewNumberEl = document.querySelector("p.review-number");
const reviewTextEl = document.querySelector("p.review-text");
const divDeviceEl = document.querySelector("div.device");
// console.log(deviceNameEl);
// console.log(reviewsBoxEl);
// console.log(reviewEl);
// console.log(reviewNumberEl);
// console.log(reviewTextEl);

reviewsData.forEach((element) => {
    const deviceNameElInside = document.createElement("h3");
    deviceNameElInside.innerHTML = element.product;
    console.log(element);
    const divDeviceElInside = document.createElement("div");
    divDeviceElInside.appendChild(deviceNameElInside);
    if (element.reviews.length > 1) {
        element.reviews.forEach((reviewsElem) => {
            const reviewNumberElInside = document.createElement("p");
            reviewNumberElInside.innerHTML = reviewsElem.id;
            divDeviceElInside.appendChild(reviewNumberElInside);
            const reviewTextElInside = document.createElement("p");
            reviewTextElInside.innerHTML = reviewsElem.text;
            divDeviceElInside.appendChild(reviewTextElInside);
        });
    } else {
        const reviewNumberElInside = document.createElement("p");
        reviewNumberElInside.innerHTML = element.reviews[0].id;
        divDeviceElInside.appendChild(reviewNumberElInside);
        const reviewTextElInside = document.createElement("p");
        reviewTextElInside.innerHTML = element.reviews[0].text;
        divDeviceElInside.appendChild(reviewTextElInside);
    }
    divDeviceElInside.classList.add(`${element.product.replaceAll(" ", "")}`);
    divContainerReviewsEl.appendChild(divDeviceElInside);
});

// поймать данные, которые вводит пользователь
let foundDeviceName = "";
// console.log(newReviewNumber);
const formEl = document.querySelector('form');
const inputEl = document.querySelector("input.user-review");
const buttonEl = document.querySelector("button.submit-button");

const selectValueEl = document.querySelector("select.list-of-devices");
selectValueEl.addEventListener("change", () => {
    foundDeviceName = selectValueEl.value;
});
const errorEl = document.querySelector('p.error-text');

buttonEl.addEventListener("click", () => {
    const newReviewNumberEl = document.createElement("p");
    const newReviewTextEl = document.createElement("p");
    newReviewTextEl.innerHTML = inputEl.value;
    if (inputEl.value.length < 3 || inputEl.value.length > 10) {
        const errorText = "Отзыв не может быть меньше 3 и более 10 символов"
        errorEl.innerHTML = errorText;
        throw new Error(errorText);
    }
    errorEl.innerHTML = "";
    let newReviewNumber = 0;
    reviewsData.forEach((el) => {
        newReviewNumber += el.reviews.length;
    });
    reviewsData.forEach((element) => {
        if (foundDeviceName === element.product) {
            element.reviews.push({
                id: `${newReviewNumber + 1}`,
                text: inputEl.value,
            });
            console.log(reviewsData);
            newReviewNumberEl.innerHTML = newReviewNumber + 1;

            let divContainerNextElement =
                divContainerReviewsEl.firstElementChild;
            for (let i = 0; i < divContainerReviewsEl.children.length; i++) {
                // console.log(divContainerNextElement);
                if (
                    divContainerNextElement.classList.contains(
                        `${element.product.replaceAll(" ", "")}`
                    )
                ) {
                    console.log("bingo");
                    divContainerNextElement.appendChild(newReviewNumberEl);
                    divContainerNextElement.appendChild(newReviewTextEl);
                }
                divContainerNextElement =
                    divContainerNextElement.nextElementSibling;
            }
        }
    });
});
