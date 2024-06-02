// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

// import { createServer } from "http";

let counterIndex = 0;
let counterAbout = 0;
const http = require("http");
const server = http.createServer((req, res) => {
    console.log("Запрос получен");
    if (req.url === "/" || req.url === "/index.html") {
        counterIndex += 1;
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        res.end(
            `<menu><a href="./index.html">Главная</a><a href="./about.html">Обо мне</a></menu><h1>Добро пожаловать!</h1><a href="./about.html">Обо мне можно прочитать здесь :-)</a><div class="counter">Счетчик просмотров: ${counterIndex}</div>`
        );
    } else if (req.url === "/about" || req.url === "/about.html") {
        counterAbout += 1;
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        res.end(
            `<menu><a href="./index.html">Главная</a><a href="./about.html">Обо мне</a></menu><h1>Страница Обо мне</h1><h2>Рад Вас видеть! Меня зовут Алексей</h2><div class="counter">Счетчик просмотров: ${counterAbout}</div>`
        );
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        res.end("<h1>Page not found </h1>");
    }
});

function serverHandler(req, res) {
    console.log("Запрос получен");
    if (req.url === "/" || req.url === "/index.html") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        res.end(
            '<menu><a href="./index.html">Главная</a><a href="./about.html">Обо мне</a></menu><h1>Добро пожаловать!</h1><a href="./about.html">Обо мне можно прочитать здесь :-)</a>'
        );
    } else if (req.url === "/about" || req.url === "/about.html") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        res.end(
            '<menu><a href="./index.html">Главная</a><a href="./about.html">Обо мне</a></menu><h1>Страница Обо мне</h1><h2>Рад Вас видеть! Меня зовут Алексей</h2>'
        );
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        res.end("<h1>Page not found </h1>");
    }
}

const port = 3200;
server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

const port2 = 3400;
const server3 = http.createServer(serverHandler);
server3.listen(port2, () => {
    console.log(`Сервер запущен на порту ${port2}`);
});